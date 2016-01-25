import React from 'react'
import PieChart from 'react-simple-pie-chart'
import ItemProgressBar from './item-progress-bar.js'
import {random} from '../../utils/helpers.js'

const progress = random(100)
const passed   = random(100)
const pie      = random(100)
const slices = [
	{ color: '#72AC4D', value: pie},
	{ color: '#EB7D3B', value: 100 - pie}
]  

export default ({title}) => {

	return (

		<div className='alert alert-success Item__box'>
			<div className="col-xs-12">
				<strong>{title}</strong>
			</div>

			<div className="col-xs-8 Item__unit-test-pie-chart">
				<PieChart slices={slices} />
			</div>

			<div className="col-xs-4">
				<p className="Item__unit-test-passed">
					{`${passed}%`}
				</p>
				<p className="Item__unit-test-passed-text">
					<small>test passed</small>
				</p>
			</div>

			<div className="col-xs-12 Item__unit-test-progress-bar">

				<ItemProgressBar progress={progress} active="false" />
				<span className="Item__unit-test-progress-bar-text text-center">
					<span className={progress > 50 ? "text-dark-green": "text-orange"}>{`${progress}%`}<br/> <small>code covered</small> </span>
				</span>

			</div>

		</div>		
	)

}