import React, { Component } from 'react'
import ReactDOM from 'react-dom'

{/*import App from './components/App'
   */}

var X = React.createClass({
	render: function(){
		return(
			<p>X</p>
		      )
	}
})

var App = React.createClass({
	render: function(){
		return(
			<div>
			<p>Hi  oye Bhai Hello world</p>
			<X />
			<X />
			</div>
		      )
	}
})

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<X />, document.getElementById('app2'));