import React, { Component } from 'react'

export default class Header extends Component {
	render() {
		return (
		<section class="text-center" id="header">
			<div class="dark-overlay py-5 px-2">
				<div class="container">
					<div class="row">
						<div class="col-md-6 mx-auto text-white">
							<h3 class="pb-2 display-4">My Github Page Projects</h3>
							<p class="lead">Github Page is a great tool to version control, share and showcase my projects, all at the same time. However, it's hard to browse the site through github.com so I created this page to make things easier.</p>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="card bg-primary text-white card-menu">
								<div class="card-body">
									<h3 class="">Explore</h3>
									<p class="">Choose the category</p>
									<button class="btn btn-outline-light btn-lg btn-block mb-3">React</button>
									<button class="btn btn-outline-light btn-lg btn-block mb-3">Bootstrap</button>
									<button class="btn btn-outline-light btn-lg btn-block mb-3">HTML5 Games</button>
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
