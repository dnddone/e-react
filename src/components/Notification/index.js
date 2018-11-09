import React, { Component } from 'react';
import { connetct } from 'react-redux';
import NotificationMessage from './NotificationMessage';

class Notification extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="notification">
				<NotificationMessage />
				<NotificationMessage />
				<NotificationMessage />
				<NotificationMessage />
			</div>
		);
	}
}

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps)(Notification);