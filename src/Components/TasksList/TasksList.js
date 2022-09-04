import React from 'react';
import './TasksList.css';
import TaskItem from '../TaskItem/TaskItem'

export default class TasksList extends React.Component {
	render() {
		const tasks = this.props.tasks;

		return (
			<div className='taskList'>
				<ul className="list-group">
					{tasks.map(task => <TaskItem task={task} key={task.id} onDelete={this.props.onDelete} onDone={this.props.onDone} onImportant={this.props.onImportant} />)}
				</ul>
			</div>
		)
	}
}