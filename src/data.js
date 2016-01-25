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
		unitTest       : random(100),
		functionalTest : random(100),
	}
}

export default {

	collection: new Rx.Subject(),

	fetch(){
		console.log('Fetching!');

		const mockLatency = random(3000);

		Rx.Observable.
			just(mockLatency).
			flatMap(latency => Rx.Observable.
				just().
				delay(latency)
			).
			flatMap(() => Rx.Observable.
				range(0, random(9) + 1).
				map(i => randomMockItem()).
				reduce((items, item) => [...items, item], [])
			).
			do(items => console.log(items)).
			subscribe(data => this.collection.onNext(data))
	}

}
