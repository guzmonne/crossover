import React from 'react'
import { parsedDate, randomDate } from '../../utils/helpers.js'

export default ({}) => {

	return (
		<div className='alert alert-success Item__box'>
			<div className="col-xs-12">
				<strong>Build</strong>
			</div>

			<div className="col-xs-6 text-center text-primary Item__build-pc-container">
				<i className="icon-pc Item__build-pc"></i>
				<p className="Item__build-pc-title">Debug</p>
			</div>

			<div className="col-xs-6 text-center text-primary Item__build-pc-container">
				<i className="icon-pc Item__build-pc"></i>
				<p className="Item__build-pc-title">Release</p>
			</div>

			<div className="col-xs-12 text-center Item__build-date">
				{ parsedDate( randomDate() ) }
			</div>

		</div>

	)

}