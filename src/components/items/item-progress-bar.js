import React from 'react'

export default ({progress, children, active, striped}) => {

	const barStyle = {
		width: `${progress}%`
	}

	return (

		<div className="progress">

			<div className={`progress-bar progress-bar-primary ${!!striped ? 'progress-bar-striped' : null} ${!!active ? 'active' : null}`} style={barStyle}>
				{children}
			</div>

		</div>

	)

}