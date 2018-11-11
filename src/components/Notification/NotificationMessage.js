import React from 'react';

const NotificationMessage = (props) => {
	const { id, title, status } = props;

	return (
		<div className="notification__container">
			<h3 className="notification__title">{title}</h3>
			<p className="notification__message">
				(<span className="color-blue">{id}</span>): the movie was <span className="color-yellow">{status ? 'added to' : 'removed from'}</span> your favorite list
			</p>
		</div>
	);
}

export default NotificationMessage;