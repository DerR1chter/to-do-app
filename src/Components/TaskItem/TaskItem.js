import React from 'react';
import './TaskItem.css';

export default class TaskItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { id: this.props.task.id }
		this.deleteTask = this.deleteTask.bind(this);
		this.markDone = this.markDone.bind(this);
		this.markImportant = this.markImportant.bind(this);
	}
	
	deleteTask() {
		this.props.onDelete(this.state.id);
	}

	markDone() {
		this.props.onDone(this.state.id);
	}

	markImportant() {
		this.props.onImportant(this.state.id);
	}


	render() {
		const styles = {
			textDecoration: this.props.task.isDone ? 'line-through' : 'none',
			fontWeight: this.props.task.isImportant ? 'bold' : 'normal',
			color : this.props.task.isImportant ? 'blue' : 'black'  

		};

		return (
				<li className="list-group-item" >
					<div className='row'>
						<div className='col tasks' style={styles} onClick={this.markDone}>
							{this.props.task.name}
						</div>
						<div className='col icons'>
							<span onClick={this.deleteTask} className="badge bg-danger "><i className="bi bi-trash"></i></span>
							&nbsp;
							<span onClick={this.markImportant} className="badge bg-warning "><i className="bi bi-bookmark-star"></i></span>
						</div>
					</div>
				</li>
		)
	}
}