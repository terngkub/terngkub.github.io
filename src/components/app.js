import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';
import Works from './works';
import Contact from './contact';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route path="/works/:category" component={Works} />
						<Route path="/contact" component={Contact} />
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
