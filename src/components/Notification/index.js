import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationMessage from './NotificationMessage';

class Notification extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	} 

	render() {
		const { id, title } = this.props;

		return (
			<div className="notification">
				<NotificationMessage id={id} title={title} />
			</div>
		);
	}
}

export default Notification;