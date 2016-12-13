import {Route, Router, browserHistory} from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/AppSPA.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'

var routes = <Router history={browserHistory}>
<Route path='/' component={App} >
<Route path='/home' component={Home} />
<Route path='/about' component={About} />
</Route>
				</Router>
ReactDOM.render((routes)
		, document.getElementById('app'));

{/*ReactDOM.render(<X />, document.getElementById('app2'));
ReactDOM.render(<App3 />, document.getElementById('app3'));
ReactDOM.render(<App4 />, document.getElementById('app4'));
*/}
