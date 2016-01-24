const random = max => Math.round(Math.random() * max)

export default [
	{
		type           : 'firewall',
		state          : 'running',
		id             : '432461',
		owner          : 'jtuck',
		started        : new Date(2016, 0, random(30), random(24), random(60), random(60)),
		metrics        : random(100),
		build          : random(100),
		unitTest       : random(100),
		functionalTest : random(100),
	},
	{
		type           : 'build',
		state          : 'rejected',
		id             : 'Tenrox-R1_1235',
		started        : new Date(2016, 0, random(30), random(24), random(60), random(60)),
		metrics        : random(100),
		build          : random(100),
		unitTest       : random(100),
		functionalTest : random(100),
	}
]