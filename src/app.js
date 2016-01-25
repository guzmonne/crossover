/* STYLES */
require('../node_modules/font-awesome/css/font-awesome.css')
require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('./_styles/override.styl')

import React from 'react'
import { render } from 'react-dom'
import App from './components/main-app.js'

/*****************************************/
/* Helper function to capitalize strings */
/*****************************************/
String.prototype.capitalizeFirstLetter = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

render(<App />, document.getElementById('root'))