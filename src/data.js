import Rx from 'rx'
import _ from 'lodash'
import mockData from './mock-data.js'


export default {

	collection: new Rx.Subject(),

	fetch(){
		console.log('Fetching!');

		const mockLatency = Math.round(Math.random() * 1000)

		Rx.Observable.
			just(mockLatency).
			flatMap(latency => Rx.Observable.
				just(mockData).
				delay(latency)
			).
			subscribe(data => this.collection.onNext(data))
	}

}
