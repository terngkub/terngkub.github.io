import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';
import Works from './works';
import Contact from './contact';

class App extends Component {
  render() {
    return (
		<div class="container">
			This is app.js.
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route path="/works/:category" component={Works} />
					<Route path="/contact" component={Contact} />
					<Route path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
    );
  }
}

export default App;
