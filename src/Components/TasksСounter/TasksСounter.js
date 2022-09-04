import React from 'react';
import './TasksСounter.css';

export default class TasksCounter extends React.Component {
	countToDo = () => {
		const allTasks = this.props.counter.length;
		const toDo = this.props.counter.filter(task => task.isDone === false).length;
		return {toDo: toDo, done: allTasks-toDo};
	}
	render() {

		return <p>{this.countToDo().toDo} more to do, {this.countToDo().done} done</p>
	}
}