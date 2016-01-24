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
				<div className="row">
					
					<div className="col-xs-3">
						<h4 className="App__column_header">Changelist / Build</h4>
					</div>

					<div className="col-xs-2">
						<h4 className="App__column_header">Owner</h4>
					</div>

					<div className="col-xs-2">
						<h4 className="App__column_header">Time Started</h4>
					</div>

					<div className="col-xs-1">
						<h4 className="App__column_header">State</h4>
					</div>

					<div className="col-xs-1">
						<h4 className="text-center App__column_header">Metrics</h4>
					</div>

					<div className="col-xs-1">
						<h4 className="text-center App__column_header">Build</h4>
					</div>

					<div className="col-xs-1">
						<h4 className="text-center App__column_header">Unit Test</h4>
					</div>

					<div className="col-xs-1">
						<h4 className="text-center App__column_header">Functional Test</h4>
					</div>

				</div>
				
				{this.state.items.map((item, index) => <Item key={index} {...item} activate={this.activate.bind(this, item.id)} active={this.state.activeItem === item.id}/>)}

			</div>
		)
	}

}