import React, { Component } from 'react';
import { connect } from 'react-redux'

import NotificationMessage from './NotificationMessage';

class Notification extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	} 

	render() {
		const { id, title, status } = this.props;

		return (
			<div className="notification">
				<NotificationMessage id={id} title={title} status={status} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		id: state.id,
		title: state.title,
		status: state.status
	}
}

export default connect(mapStateToProps)(Notification);