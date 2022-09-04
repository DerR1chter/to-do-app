import React from 'react';
import './AddItem.css';

export default class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { taskText: '' };
		this.handleChange = this.handleChange.bind(this);
		this.addTask = this.addTask.bind(this);
	}
	

	handleChange(e) {
		const text = e.target.value;
		this.setState( {taskText : text} );
	}

	addTask(e) {
		e.preventDefault();
		this.props.onAdd(this.state.taskText);
		this.setState({taskText : ''});
	}

	render() {

		return (
			<div className='customContainer'>
				<form className="row g-2 addItem">
					<div className="col">
						<input onChange={this.handleChange} value={this.state.taskText} type="text" className="mb-3 form-control" placeholder="Task" />
					</div>
					<div className="col-auto">
						<button onClick={this.addTask} type="submit" className="btn btn-primary mb-3">Add task</button>
					</div>
				</form>
				</div>
		) 
	}
}