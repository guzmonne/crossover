import React from 'react'

const Arrow = ({text, direction, status, value}) => {
	return (
			<div className={`col-xs-6 text-center Item__arrow-container`}>
				<p className={`Item__arrow text-${status}`}>
					<span className={`glyphicon glyphicon-arrow-${direction} glyphicon-scale-5-4`}></span>
				</p>
				<p className="Item__arrow-text">{text}</p>
				<span className="Item__arrow-value">{value.toString().length === 1 ? `0${value}` : value}</span>
			</div>
	)
} 


export default ({test, maintainability, security, workmanship, prev}) => {

	const check = (val, prev) => val < prev
	const state = check(test, prev.test) || check(maintainability, prev.maintainability)

	return (

		<div className={state ? 'alert alert-danger Item__box' : 'alert alert-success Item__box'}>
			<div className="col-xs-12">
				<strong>Metrics</strong>
			</div>

			<Arrow 
				value={test}
				text="Test"
				direction={check(test, prev.test) ? 'down' : 'up'}
				status={check(test, prev.test) ? 'danger' : 'success'}/>
			<Arrow 
				value={maintainability}
				text="Maintainability"
				direction={check(maintainability, prev.maintainability) ? 'down' : 'up'}
				status={check(maintainability, prev.maintainability) ? 'danger' : 'success'}/>
			
			<Arrow value={security} text="Security" direction="right" status="warning"/>
			<Arrow value={workmanship} text="Workmanship" direction="right" status="warning"/>

		</div>

	)

}