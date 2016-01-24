import React from 'react'

export default ({progress}) => {

	const barStyle = {
		width: `${progress}%`
	}

	return (

		<div className="progress">

			<div className="progress-bar progress-bar-primary progress-bar-striped active" style={barStyle}></div>

		</div>

	)

}