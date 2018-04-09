import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

export default class SiteNavbar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<Navbar color="dark" dark expand="md">
				<Link to="/" className="navbar-brand">terngkub.github.io</Link>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Link to="/" className="nav-link">Home</Link>
						</NavItem>
						<NavItem>
							<Link to="/works" className="nav-link">All Projects</Link>
						</NavItem>
						<NavItem>
							<Link to="/works/react" className="nav-link">React</Link>
						</NavItem>
						<NavItem>
							<Link to="/works/bootstrap" className="nav-link">Bootstrap</Link>
						</NavItem>
						<NavItem>
							<Link to="/works/html5game" className="nav-link">HTML5 Game</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
