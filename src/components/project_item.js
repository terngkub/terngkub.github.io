import React, { Component } from 'react';

export default class ProjectItem extends Component {
	render() {
		const { title, description } = this.props.project;
		const img = require(`../img/${title}.png`);
		const pageUrl = `https://terngkub.github.io/${title}`;
		const sourceUrl = `https://github.com/terngkub/${title}`;

		return (
			<div className="col-sm-6 col-lg-4 mb-4">
				<div className="card">
					<img src={img} alt="" className="card-img-top" />
					<div className="card-body">
						<h4 className="card-title">{title}</h4>
						<p className="card-text">{description}</p>
						<a href={pageUrl} target="_blank" className="btn btn-info mr-3">view</a>
						<a href={sourceUrl} target="_blank" className="btn btn-secondary mr-3">source</a>
					</div>
				</div>
			</div>
		);
	}
}
