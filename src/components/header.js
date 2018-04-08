import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default class Header extends Component {
	render() {
		return (
		<section className="text-center" id="header">
			<div className="dark-overlay py-5 px-2">
				<div className="container">
					<div className="row">
						<div className="col-md-6 mx-auto text-white">
							<h3 className="pb-2 display-4">About Me</h3>
							<p className="lead">My name is Nattapol Kamolbal. I've a passion in programming so I flew from Bangkok to Paris to study at <a href="https://42.fr" target="blank">École 42</a>. Here is my front-end works that I've hosted on Github Page. Apart from front-end projects, you can also find my other projects on my <a href="https://github.com/terngkub" target="blank">Github</a>.</p>
							<div className="my-4">
							<SocialIcon url="https://github.com/terngkub" color="white" className="mx-3" style={{ height: 40, width: 40}} />
							<SocialIcon url="https://www.linkedin.com/in/nattapol-kamolbal" color="white" className="mx-3" style={{ height: 40, width: 40}}  />
							<SocialIcon url="mailto:terngnattapol@gmail.com" color="white" className="mx-3" style={{ height: 40, width: 40}}  />
							</div>
						</div>
						<div className="col-md-6 col-lg-5 col-xl-4">
							<div className="card bg-primary text-white card-menu">
								<div className="card-body">
									<h3 className="">Check Out My Works</h3>
									<p className="">Choose the category</p>
									<Link to="/works" className="btn btn-outline-light btn-lg btn-block mb-3">All Projects</Link>
									<Link to="/works/react" className="btn btn-outline-light btn-lg btn-block mb-3">React</Link>
									<Link to="/works/bootstrap" className="btn btn-outline-light btn-lg btn-block mb-3">Bootstrap</Link>
									<Link to="/works/html5game" className="btn btn-outline-light btn-lg btn-block mb-3">HTML5 Game</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		);
	}
}
