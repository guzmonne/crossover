import Rx from 'rx'
import _ from 'lodash'
import mockData from './mock-data.js'
import {random, randomDate} from './utils/helpers.js'

const owners = ['jtuck', 'samy']

const _options = {
	firewall: {
		states: [ 'pending', 'running', 'rejected', 'accepted' ],
		idSeed: 1000,
	},
	build: {
		states: [ 'pending', 'running', 'error', 'complete' ],
		idSeed: 432000,
		idPrefix: 'Tenrox-R1_'
	}
}

export const randomMockItem = (options=_options) => {
	const types = Object.keys(options) 
	const type = types[random(types.length - 1)]

	const option = options[type]

	const states = option.states
	const state = states[random(states.length - 1)]

	const id = `${option.idPrefix || ''}${option.idSeed + random(option.idMax || 1000)}`

	const owner = owners[random(owners.length - 1)]

	return {
		type,
		state,
		id,
		owner,
		started        : randomDate(),
		metrics        : {
			progress        : random(100),
			test            : random(100),
			maintainability : random(100),
			security        : random(100),
			workmanship     : random(100),
			prev: {
				test            : random(100),
				maintainability : random(100),
				security        : random(100),
				workmanship     : random(100),
			}
		},
		build          : random(100),
		unitTest       : {
			progress : random(100),
			covered  : random(100),
			passed   : random(100),
			pie      : random(100),
		},
		functionalTest : {
			progress : random(100),
			covered  : random(100),
			passed   : random(100),
			pie      : random(100),
		},
	}
}

export const randomPendingMockItem = () => {
	const seed = randomMockItem()

	return Object.assign({}, 
		seed,
		{
			state          : 'pending',
			metrics        : Object.assign({}, seed.metrics, { progress: 0 }),
			unitTest       : Object.assign({}, seed.unitTest, { progress: 0 }),
			functionalTest : Object.assign({}, seed.functionalTest, { progress: 0 }),
			build          : 0
		}
	)
} 

export default {

	randomMockItem,

	randomPendingMockItem,

	fetch(){
		const mockLatency = random(3000);

		return Rx.Observable.
			just(mockLatency).
			flatMap(latency => Rx.Observable.
				just().
				delay(latency)
			).
			flatMap(() => Rx.Observable.
				range(0, 6).
				map(i => randomPendingMockItem()).
				reduce((items, item) => [...items, item], [])
			).
			flatMap(items => Rx.Observable.
				interval(500).
				map(i => items.filter(item => (item.state === 'pending' || item.state === 'running')).slice(0, 3)).
				takeWhile(fItems => fItems.length > 0).
				flatMap(fItems => Rx.Observable.
					fromArray(fItems).
					map(item => {
						if (item.state === 'pending') 
							item.state = 'running'
						else if (item.metrics.progress < 99)
							item.metrics = Object.assign({}, item.metrics, {progress: item.metrics.progress + random(100)})
						else if (item.build < 99)
							item.build = item.build + random(100)
						else if (item.unitTest.progress < 99)
							item.unitTest = Object.assign({}, item.unitTest, {progress: item.unitTest.progress + random(100)})
						else if (item.functionalTest.progress < 99)
							item.functionalTest = Object.assign({}, item.functionalTest, {progress: item.functionalTest.progress + random(100)})
						else
							item.state = item.type === 'build' ? 'complete' : 'accepted'
						return item
					}).
					map(item => {if (random(100) > 98) item.state = (item.type === 'build' ? 'error' : 'rejected')}).
					map(() => [...items])
				)
			)
	}

}
