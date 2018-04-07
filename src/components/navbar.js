import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md bg-dark navbar-dark">
				<div className="container">
					<a href="index.html" className="navbar-brand">terngkub.github.io</a>
					<button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to="/" className="nav-link">Home</Link>
							</li>
							<li className="nav-item">
								<Link to="/works/abc" className="nav-link">Works</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link">Contact</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
