import React from 'react';

const NotificationMessage = (props) => {
	return (
		<div className="notification__container">
			<h3 className="notification__id">(id: <span className="color-blue">this.id</span>)</h3>
			<p className="notification__message">
				The movie "<span className="color-yellow">this.title</span>" was (deleted from) your favorite list
			</p>
		</div>
	);
}

export default NotificationMessage;