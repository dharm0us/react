import {Route, Router, browserHistory} from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/AppSPA.jsx'


ReactDOM.render((<App/>
		)
		, document.getElementById('app'));

{/*ReactDOM.render(<X />, document.getElementById('app2'));
ReactDOM.render(<App3 />, document.getElementById('app3'));
ReactDOM.render(<App4 />, document.getElementById('app4'));
*/}
