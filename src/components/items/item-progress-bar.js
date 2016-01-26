import React from 'react'

export default ({progress, children, active, striped}) => {

	const barStyle = {
		width: `${progress}%`
	}

	return (

		<div className={`progress ${progress === 0 ? 'progress-bar-empty' : null}`}>

			<div className={`progress-bar progress-bar-primary ${!!striped ? 'progress-bar-striped' : null} ${!!active ? 'active' : null}`} style={barStyle}>
				{children}
			</div>

		</div>

	)

}