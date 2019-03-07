import React from 'react';
import { string, bool, func } from 'prop-types';

const propTypes = {
  title: string,
  status: bool.isRequired,
  removeNotificationMessage: func.isRequired,
};

const defaultProps = {
  title: 'Unknown',
};

const NotificationMessage = ({
  title,
  status,
  removeNotificationMessage,
}) => {
  setTimeout(removeNotificationMessage, 5000);

  return (
    <div className="notification__container">
      <h3 className="notification__title">{title}</h3>
      <p className="notification__message">
        <span className="color-blue">{title}</span>
        {' was '}
        <span className="color-yellow">
          {status ? 'added to' : 'removed from'}
        </span>
        {' favorite list'}
      </p>
    </div>
  );
};

NotificationMessage.propTypes = propTypes;
NotificationMessage.defaultProps = defaultProps;

export default NotificationMessage;
