import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
				<NavbarBrand href="/">terngkub.github.io</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/works">All Projects</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/works/react">React</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/works/bootstrap">Bootstrap</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/works/html5game">HTML5 Game</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
