import {random, randomDate} from './utils/helpers.js'

export default [
	{
		type           : 'firewall',
		state          : 'running',
		id             : '432461',
		owner          : 'jtuck',
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
	},
	{
		type           : 'build',
		state          : 'rejected',
		id             : 'Tenrox-R1_1235',
		started        : new Date(2016, 0, random(30), random(24), random(60), random(60)),
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
]