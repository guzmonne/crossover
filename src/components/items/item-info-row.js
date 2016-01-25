import React from 'react'
import ItemMetrics from './item-metrics.js'
import ItemBuild from './item-build.js'
import ItemPieChart from './item-pie-chart.js'
import ItemResult from './item-result.js'

export default ({type, state, id, owner, started, metrics, build, unitTest, functionalTest, active, openMetricsModal, openBuildModal, openUnitTestModal, openFunctionalTestModal}) => {

	return (
		<div className={active ? 'col-xs-12 Item__info Item__info_opened' : 'Item__info'}>

				<div className="row-p">
					
					<div className="col-p-20" onClick={openMetricsModal}>
						<div className="col-p">
							<ItemMetrics {...metrics} />
						</div>
					</div>
					
					<div className="col-p-20" onClick={openBuildModal}>
						<div className="col-p">
							<ItemBuild {...build} />
						</div>
					</div>
					
					<div className="col-p-20" onClick={openUnitTestModal}>
						<div className="col-p">
							<ItemPieChart title="Unit Test" />
						</div>
					</div>
					
					<div className="col-p-20" onClick={openFunctionalTestModal}>
						<div className="col-p">
							<ItemPieChart title="Functional Test" />
						</div>
					</div>
					
					<div className="col-p-20">
						<div className="col-p">
							<ItemResult state={state} type={type}/>
						</div>
					</div>

					<div className="clear"></div>
				</div>

		</div>
	)

}