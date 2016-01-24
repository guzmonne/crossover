import React from 'react'
import ItemProgressBar from './item-progress-bar.js'
import {random} from '../../utils/helpers.js'

export default ({}) => {

	const progress = random(100)
	const passed   = random(100)

	return (

		<div className='alert alert-success Item__box'>
			<div className="col-xs-12">
				<strong>Unit Test</strong>
			</div>

			<div className="col-xs-8">

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