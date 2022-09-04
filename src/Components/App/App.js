import React from 'react';
import TasksCounter from '../TasksСounter/TasksСounter';
import SearchBar from '../SearchBar/SearchBar';
import AddItem from '../AddItem/AddItem';
import TasksList from '../TasksList/TasksList';
import TaskStatusBar from '../TaskStatus/TaskStatus';

import './App.css';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.id = 1;
		this.state = { tasks: [{name: 'Task 1', isDone: false, isImportant: false, id: this.id++}, 
		{name: 'Task 2', isDone: false, isImportant: false, id: this.id++},
		{name: 'Task 3', isDone: false, isImportant: false, id: this.id++}],
		searchTerm : '',
		status: 'All'
		};
		this.statuses = ['All', 'Active', 'Done'];

		this.deleteTask = this.deleteTask.bind(this);
		this.markDone = this.markDone.bind(this);
		this.markImportant = this.markImportant.bind(this);
		this.addNewTask = this.addNewTask.bind(this);
		this.updateSearchTerm = this.updateSearchTerm.bind(this);
		this.listOfTasksToShow = this.listOfTasksToShow.bind(this);
		this.updateStatus = this.updateStatus.bind(this);
		this.displayStatuses = this.displayStatuses.bind(this);
	}

	deleteTask(id) {
		const oldTasks = this.state.tasks;
		const idx = oldTasks.findIndex(task => task.id === id);

		const before = oldTasks.slice(0, idx);
		const after = oldTasks.slice(idx+1);

		const newTasks = [...before, ...after];
		this.setState({tasks: newTasks});
	}

	toogleState(id, state) {
		const oldTasks = this.state.tasks;
		const idx = 	oldTasks.findIndex(task => task.id === id);

		const newTask = oldTasks[idx];
		newTask[state] = !oldTasks[idx][state];

		const before = oldTasks.slice(0, idx);
		const after = oldTasks.slice(idx+1);

		const newTasks = [...before, newTask, ...after];
		this.setState({tasks: newTasks});
	}

	markDone(id) {
		this.toogleState(id, 'isDone');
	}

	markImportant(id) {
		this.toogleState(id, 'isImportant');
	}
	
	addNewTask(text) {
		const newTask = {
			name: text,
			isDone: false,
			isImportant: false,
			id: this.id++
		}
		this.setState({tasks: [...this.state.tasks, newTask]});
	}

	updateSearchTerm(term) {
		this.setState( {searchTerm: term});
	}

	listOfTasksToShow() {
		let allTasks;
		if(this.state.status === 'All') {
			allTasks = this.state.tasks;
		} else if (this.state.status === 'Active') {
			allTasks = this.state.tasks.filter(task => !task.isDone);
		} else {
			allTasks = this.state.tasks.filter(task => task.isDone);
		}			
			
		const searchTerm = this.state.searchTerm;
		if (!searchTerm) {
			return allTasks;
		} else {
			return allTasks.filter(term => term.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
		}
		
	}

	updateStatus(status) {
		this.setState({status: status});
	}

	displayStatuses() {
		return (
			<div className="col-auto">
				{this.statuses.map(status => <TaskStatusBar statusName={status} currentStatus={this.state.status} updateStatus={this.updateStatus} key={status.length} />)}
			</div>
		)
	}

	render() {
		return (
			<div className='container'>
				<h1>My To-Do-List App!</h1>
				<TasksCounter counter={this.state.tasks} />
				<div className='row g-2 searchAndStatus'>
					<SearchBar updateSearchTerm={this.updateSearchTerm} />
					{this.displayStatuses()}
				</div>
				<TasksList tasks={this.listOfTasksToShow()} onDelete={this.deleteTask} onDone={this.markDone} onImportant={this.markImportant} />
				<AddItem onAdd={this.addNewTask} />
			</div>
		)
	}
}