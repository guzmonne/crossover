import React from 'react'
import ItemIconType from './item-icon-type.js'
import ItemStarted from './item-started.js'
import ItemProgressBar from './item-progress-bar.js'
import ItemMetrics from './item-metrics.js'
import ItemBuild from './item-build.js'
import ItemUnitTest from './item-unit-test.js'

export default class Item extends React.Component {

	constructor(props){
		super(props)

		this.onActivate = this.onActivate.bind(this)
		
		this.itemClassState = {
			pending  : 'default',
			running  : 'info',
			rejected : 'danger',
			complete : 'success',
			accepted : 'success',
		}
	}

	onActivate(e){
		e.preventDefault()
		this.props.activate()
	}

	render(){
		const {type, state, id, owner, started, metrics, build, unitTest, functionalTest, active} = this.props

		return (
			<div className={"row alert alert-" + this.itemClassState[state]}>

				<div className="col-xs-1 col-degutter-l">
					<ItemIconType type={type} />
				</div>

				<div className="col-xs-2 col-degutter-r">
					<span className="Item__text" >
						<a onClick={this.onActivate} className="Item__anchor" href="#">{id}</a>
					</span>
				</div>

				<div className="col-xs-2">
					<span className="Item__text">{owner}</span>
				</div>

				<div className="className col-xs-2">
					<ItemStarted started={started} />
				</div>

				<div className="col-xs-1">
					<span className="Item__text">{state.capitalizeFirstLetter()}</span>
				</div>

				<div className={active ? 'Item__progress-bars closed' : 'Item__progress-bars'}>
					<div className="col-xs-1">
						<ItemProgressBar progress={metrics.progress} />
					</div>

					<div className="col-xs-1">
						<ItemProgressBar progress={build} />
					</div>

					<div className="col-xs-1">
						<ItemProgressBar progress={unitTest} />
					</div>

					<div className="col-xs-1">
						<ItemProgressBar progress={functionalTest} />
					</div>
				</div>	

				<div className={active ? 'col-xs-12 Item__info Item__info_opened' : 'Item__info'}>

					<div className="row-p">
						
						<div className="col-p-20">
							<div className="col-p">
								<ItemMetrics {...metrics} />
							</div>
						</div>
						
						<div className="col-p-20">
							<div className="col-p">
								<ItemBuild {...build} />
							</div>
						</div>
						
						<div className="col-p-20">
							<div className="col-p">
								<ItemUnitTest {...unitTest} />
							</div>
						</div>
						
						<div className="col-p-20">
							<div className="col-p">
								<div className="Item__box"></div>
							</div>
						</div>
						
						<div className="col-p-20">
							<div className="col-p">
								<div className="Item__box"></div>
							</div>
						</div>

						<div className="clear"></div>
					</div>

				</div>

			</div>
		)
	}

}