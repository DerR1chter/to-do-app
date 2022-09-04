import React from 'react';
import './TaskStatus.css';

export default class TaskStatusBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { statusName: this.props.statusName};
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		const newStatus = this.state.statusName;
		this.props.updateStatus(newStatus);
	}

	render() {
		const styles = {
			backgroundColor : this.state.statusName === this.props.currentStatus ? '#6C757D' : '',
			color : this.state.statusName === this.props.currentStatus ? '#ffffff' : 'black',
		}
		return (
			<button onClick={this.handleChange} style={styles} className='btn btn-outline-secondary'>{this.props.statusName}</button>
		)
	}
}