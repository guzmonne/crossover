import React from 'react'
import PieChart from 'react-simple-pie-chart'
import ItemProgressBar from './item-progress-bar.js'

export default class ItemPieChart extends React.Component {
	constructor(props){
		super(props)
	}

	shouldComponentUpdate(newProps){
		return newProps !== this.props
	}

	render(){
		const {title, pie, covered, passed} = this.props

		const slices = [
			{ color: '#72AC4D', value: pie},
			{ color: '#EB7D3B', value: 100 - pie}
		]  

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

					<ItemProgressBar progress={covered} active="false" />
					<span className="Item__unit-test-progress-bar-text text-center">
						<span className={covered > 50 ? "text-dark-green": "text-orange"}>{`${covered}%`}<br/> <small>code covered</small> </span>
					</span>

				</div>

			</div>		
		)
	}
}