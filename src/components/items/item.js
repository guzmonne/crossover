import React from 'react'

import ItemInfoRow from './item-info-row.js'
import ItemDetailRow from './item-detail-row.js'
import Loading from '../loading.js'
import ItemModal from './item-modal.js'

export default class Item extends React.Component {

	constructor(props){
		super(props)

		this.onActivate = this.onActivate.bind(this)
		this.onClose = this.onClose.bind(this)

		this.state = {
			metricsModalOpened: false,
			buildModalOpened: false,
			unitTestModalOpened: false,
			functionalTestModalOpened: false,
		}
		
		this.itemClassState = {
			pending  : 'default',
			running  : 'info',
			rejected : 'danger',
			error    : 'danger',
			complete : 'success',
			accepted : 'success',
		}

		this.openModalFunctions = {
			openMetricsModal        : () => {this.setState(Object.assign({}, this.state, {metricsModalOpened: true}))},
			openBuildModal          : () => {this.setState(Object.assign({}, this.state, {buildModalOpened: true}))},
			openUnitTestModal       : () => {this.setState(Object.assign({}, this.state, {unitTestModalOpened: true}))},
			openFunctionalTestModal : () => {this.setState(Object.assign({}, this.state, {functionalTestModalOpened: true}))},
		}
	}

	shouldComponentUpdate(newProps){
		const check = (
			newProps.active !== this.props.active ||
			newProps.state !== this.props.state ||
			newProps.metrics.progress !== this.props.metrics.progress ||
			newProps.unitTest.progress !== this.props.unitTest.progress ||
			newProps.functionalTest.progress !== this.props.functionalTest.progress ||
			newProps.build !== this.props.build
		)

		return check
	}

	onClose(){
		this.setState({
			metricsModalOpened: false,
			buildModalOpened: false,
			unitTestModalOpened: false,
			functionalTestModalOpened: false,
		})
	}

	onActivate(e, state){
		e.preventDefault()
		if (state === 'pending') return
		this.props.activate()
	}

	render(){

		const {state, active} = this.props

		return (
			<div className={"Item row alert alert-" + this.itemClassState[state]}>

				<ItemDetailRow {...this.props} onActivate={this.onActivate} />
				{state === 'running' ? <Loading active={active}/> : <ItemInfoRow {...this.props} {...this.openModalFunctions} />}

				<ItemModal title="Metrics Modal" body={this.props} show={this.state.metricsModalOpened} close={this.onClose}/>
				<ItemModal title="Build Modal" body={this.props} show={this.state.buildModalOpened} close={this.onClose}/>
				<ItemModal title="Unit Test Modal" body={this.props} show={this.state.unitTestModalOpened} close={this.onClose}/>
				<ItemModal title="Funtional Test Modal" body={this.props} show={this.state.functionalTestModalOpened} close={this.onClose}/>

			</div>	
)
	}

}