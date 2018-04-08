import React, { Component } from 'react';
import Data from './data';
import Header from './header';
import ProjectList from './project_list';

export default class Home extends Component {
	render() {
		const projectList=Data().filter(project => project.featured);

		return (
			<div>
				<Header />
				<ProjectList title="Featured Projects" projectList={projectList} />
			</div>
		);
	}
}
