import React from 'react'
import Rx from 'rx'
import Data from '../data.js'
import Item from './items/item.js'
import Loading from './loading.js'
import {random} from '../utils/helpers.js'
import ItemHeader from './items/item-header.js'
import Items from './items/items.js'


export default class App extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			items: [],
			activeItem: null,
		}
	}

	componentDidMount(){
		Data.fetch().
			subscribe(
				items => this.setState({items}),
				error => console.error(error),
				()    => console.log('completed')
			)
	}

	render(){

		return (
			<div className="container">
				<ItemHeader />
				
				{this.state.items.length === 0 ? <Loading text="Loading" /> : <Items items={this.state.items} />}

			</div>
		)
	}

}