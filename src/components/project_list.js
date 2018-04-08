import React, { Component } from 'react';
import ProjectItem from './project_item';

export default class ProjectList extends Component {
	renderProjectList(projectList) {
		return projectList.map(project => {
			return (
				<ProjectItem project={project} key={project.title} />
			);
		});
	}

	render() {
		const { title, projectList } = this.props;
		
		if (!projectList[0]) {
			return (
				<div className="container text-center py-5 my-5">
					<h1>No matching results.</h1>
					<p>Please change the category or access the category through the navigation menu.</p>
				</div>
			);
		}

		return (
			 <section className="py-5">
				<div className="container">
					<div className="row">
						<div className="col-10 col-md-8 col-lg-6 mx-auto text-center mb-5 page-title">
							<h2 className="display-4 mb-4">{title}</h2>
						</div>
					</div>
					<div className="row">
						{this.renderProjectList(projectList)}
					</div>
				</div>
			</section>
		);
	}
}
