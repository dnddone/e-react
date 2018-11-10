import React from 'react';

const NotificationMessage = (props) => {
	const { id } = props;

	return (
		<div className="notification__container">
			<h3 className="notification__title">id: <span className="color-blue">this.title</span></h3>
			<p className="notification__message">
				<span className="color-yellow">{id}</span>: the movie was (deleted from) your favorite list
			</p>
		</div>
	);
}

export default NotificationMessage;