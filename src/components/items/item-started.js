import React from 'react'
import {parsedDate} from '../../utils/helpers.js'

export default ({started}) => {
	return (
		<span className="Item__text">
			{ parsedDate(started) }
		</span>
	)
} 