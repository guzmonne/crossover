import React from 'react'
import moment from 'moment'

export default ({started}) => {
	return (
		<span className="Item__text">
			{ moment(started).format('MM D YYYY  h:mma') }
		</span>
	)
} 