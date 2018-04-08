import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SiteNavbar from './navbar';
import Home from './home';
import Works from './works';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<SiteNavbar />
					<Switch>
						<Route path="/works/:category" component={Works} />
						<Route path="/works" component={Works} />
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
