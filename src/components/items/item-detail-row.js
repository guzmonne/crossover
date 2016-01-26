import React from 'react'

import ItemIconType from './item-icon-type.js'
import ItemStarted from './item-started.js'
import ItemProgressBar from './item-progress-bar.js'
import {parsedDate} from '../../utils/helpers.js'

export default ({type, state, id, owner, started, metrics, build, unitTest, functionalTest, active, onActivate}) => {

	return (
		<div>
			<div className="col-xs-1 col-degutter-l">
				<ItemIconType type={type} />
			</div>

			<div className="col-xs-2 col-degutter-r">
				<span className="Item__text" >
					<a onClick={e => onActivate(e, state)} className="Item__anchor" href="#">{id}</a>
				</span>
			</div>

			<div className="col-xs-2">
				<span className="Item__text">{owner}</span>
			</div>

			<div className="className col-xs-2">
				<ItemStarted started={parsedDate(started)} />
			</div>

			<div className="col-xs-1">
				<span className="Item__text">{state.capitalizeFirstLetter()}</span>
			</div>

			<div className={active ? 'Item__progress-bars closed' : 'Item__progress-bars'}>
				<div className="col-xs-1">
					<ItemProgressBar progress={metrics.progress} />
				</div>

				<div className="col-xs-1">
					<ItemProgressBar progress={build} />
				</div>

				<div className="col-xs-1">
					<ItemProgressBar progress={unitTest.progress} />
				</div>

				<div className="col-xs-1">
					<ItemProgressBar progress={functionalTest.progress} />
				</div>
			</div>
		</div>

	)

}