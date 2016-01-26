import React from 'react'


export default ({text="Running", active=true}) => {
	const loading = (
		<div className="col-xs-12 text-center">
			<h1 className="text-primary">
				<i className="fa fa-spinner fa-spin"></i>{` ${text}`}
			</h1>
		</div>
	)

	return <div>{active ? loading : null}</div>
}