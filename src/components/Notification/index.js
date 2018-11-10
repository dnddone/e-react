import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationMessage from './NotificationMessage';

class Notification extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="notification">
				<NotificationMessage id={this.props.id} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	id: state.id
});

export default connect(mapStateToProps)(Notification);