import React from 'react'

export default class ItemHeader extends React.Component {

	constructor(props){
		super(props)
	}

	shouldComponentUpdate(){
		return false;
	}

	render(){
		return (
			<div className="row Item__heading">
					
				<div className="col-xs-3">
					<h5 className="App__column_header">Changelist / Build</h5>
				</div>

				<div className="col-xs-2">
					<h5 className="App__column_header">Owner</h5>
				</div>

				<div className="col-xs-2">
					<h5 className="App__column_header">Time Started</h5>
				</div>

				<div className="col-xs-1">
					<h5 className="App__column_header">State</h5>
				</div>

				<div className="col-xs-1">
					<h5 className="text-center App__column_header">Metrics</h5>
				</div>

				<div className="col-xs-1">
					<h5 className="text-center App__column_header">Build</h5>
				</div>

				<div className="col-xs-1">
					<h5 className="text-center App__column_header">Unit Test</h5>
				</div>

				<div className="col-xs-1">
					<h5 className="text-center App__column_header">Functional Test</h5>
				</div>

			</div>
		)
	}

}