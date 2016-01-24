import React from 'react'
import Data from '../data.js'
import Item from './items/item.js'


export default class App extends React.Component {

	constructor(props){
		super(props)

		this.activate = this.activate.bind(this)

		this.state = {
			items: [],
			activeItem: null,
		}
	}

	componentDidMount(){
		Data.collection.
		subscribe(
			data   => this.setState(Object.assign({}, this.state, {items: data})),
			error  => console.error(error)
		)

		Data.fetch();
	}

	activate(id){
		this.setState({activeItem: (id === this.state.activeItem) ? null : id})
	}

	render(){

		return (
			<div className="container">
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
				
				{this.state.items.map((item, index) => <Item key={index} {...item} activate={this.activate.bind(this, item.id)} active={this.state.activeItem === item.id}/>)}

			</div>
		)
	}

}