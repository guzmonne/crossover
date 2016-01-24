import React from 'react'

export default ({type}) => {
	const icons = {
		firewall: 'icon-2x icon-firewall',
		build: 'icon-2x icon-pc'
	}

	return <i className={icons[type]}></i>
}