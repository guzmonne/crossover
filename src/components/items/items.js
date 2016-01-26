import React from 'react'
import Item from './item.js'

export default class Items extends React.Component {

	constructor(props){
		super(props)

		this.activate = this.activate.bind(this)

		this.state = {
			activeItem: null
		}
	}

	activate(id){
		this.setState({activeItem: (id === this.state.activeItem) ? null : id})
	}

	render(){
		return (
			<div>
				{this.props.items.map((item, index) => <Item key={index} {...item} activate={this.activate.bind(this, item.id)} active={this.state.activeItem === item.id}/>)}
			</div>
		)	
	}

}