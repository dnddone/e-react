import React from 'react';
import { string, number, func } from 'prop-types';

const propTypes = {
  id: number,
  title: string,
  status: string.isRequired,
  removeNotificationMessage: func.isRequired,
};

const defaultProps = {
  id: 0,
  title: 'Unknown',
};

const NotificationMessage = ({
  id,
  title,
  status,
  removeNotificationMessage,
}) => {
  setTimeout(removeNotificationMessage, 5000);

  return (
    <div className="notification__container">
      <h3 className="notification__title">{title}</h3>
      <p className="notification__message">
        <span className="color-blue">{id}</span>
        : the movie was
        <span className="color-yellow">
          {status ? 'added to' : 'removed from'}
        </span>
        your favorite list
      </p>
    </div>
  );
};

NotificationMessage.propTypes = propTypes;
NotificationMessage.defaultProps = defaultProps;

export default NotificationMessage;
