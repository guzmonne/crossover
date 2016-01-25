import React from 'react'

const FirewallResult = ({state}) => {
	return (
		<h2>
			<small>Change {state.capitalizeFirstLetter()}</small>
			<br/>
			{state === 'accepted' ? <strong className="text-yellow">Auto-merged</strong> : <strong className="text-danger">Metrics Reduction</strong>}
		</h2>
	)
}

const FirewallButton = ({state}) => {
	const buttonsText = {
		accepted: <span>Merged Build</span>,
		rejected: <span><i className="fa fa-search"></i>{' Find Issues'}</span>
	}

	return (
		<button className="btn btn-primary">{buttonsText[state]}</button>
	)
}

const BuildResult = ({state}) => {
	return (
		<h3 className={state === 'complete' ? 'text-success' : 'text-danger'}>
			<strong>
				{state.capitalizeFirstLetter()}
			</strong>
		</h3>
	)
}

const BuildButton = ({state}) => {
	if (!state === 'complete') return null

	const completeButton = (
		<span>
			<button className="btn btn-primary">Deploy</button> 
			{' to: '}
			<select className="form-control">
				<option value="production">Production</option>
				<option value="staging">staging</option>
			</select>
		</span>
	)

	return (
		<div>{state === 'complete' ? completeButton : null}</div>
	)
}

export default ({state, type}) => {
	const classes = {
		rejected: 'danger',
		complete: 'success',
		accepted: 'orange'
	}

	return (

		<div className={`Item__box Item__result col-xs-12 ${classes[state] || ""}`}>

			<div className="col-xs-12 text-center">
				<h4>Result:</h4>
			</div>
			<div className="col-xs-12 text-center">
				{type === 'build' ? <BuildResult state={state} /> : null}
				{type === 'firewall' ? <FirewallResult state={state} /> : null}
			</div>
			<div className="col-xs-12 text-center">
				{type === 'build' ? <BuildButton state={state}/> : null}
				{type === 'firewall' ? <FirewallButton state={state}/> : null}
			</div>

		</div>

	)

}