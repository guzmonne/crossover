import React from 'react'

export default class ItemIconType extends React.Component {
	constructor(props){
		super(props)
	}

	shouldComponentUpdate(newProps){
		return newProps.type !== this.props.type
	}

	render(){
		const {type} = this.props

		const icons = {
			firewall: 'icon-2x icon-firewall',
			build: 'icon-2x icon-pc'
		}

		return <i className={icons[type]}></i>
	}
}