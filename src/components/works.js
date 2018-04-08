import React, { Component } from 'react';
import Data from './data';
import ProjectList from './project_list';

export default class Works extends Component {
	render() {
		const { category } = this.props.match.params;
		const projectList = !category ? Data() : Data().filter(project => project.category === category);
		let title = '';

		if (!category) {
			title = 'All Projects';
		} else {
			switch (category) {
				case 'react':
					title = 'React';
					break;
				case 'bootstrap':
					title = 'Bootstrap';
					break;
				case 'html5game':
					title = 'HTML5 Game';
					break;
				default:
					title = category;
			}
		}

		return (
			<ProjectList title={title} projectList={projectList} />
		);
	}
}
