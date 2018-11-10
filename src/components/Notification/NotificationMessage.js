import React from 'react';

const NotificationMessage = (props) => {
	const { id, title } = props;

	return (
		<div className="notification__container">
			<h3 className="notification__title">{title}</h3>
			<p className="notification__message">
				(<span className="color-blue">{id}</span>): the movie was (deleted from) your favorite list
			</p>
		</div>
	);
}

export default NotificationMessage;