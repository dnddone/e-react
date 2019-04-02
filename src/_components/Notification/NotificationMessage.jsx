import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  status: PropTypes.bool.isRequired,
  removeNotificationMessage: PropTypes.func.isRequired,
};

const defaultProps = {
  title: 'Unknown',
};

class NotificationMessage extends Component {
  constructor(props) {
    super(props);
    this.stId = setTimeout(this.removeThisNotification, 5000);
  }

  removeThisNotification = () => {
    const { id, status, removeNotificationMessage } = this.props;
    clearInterval(this.stId);
    removeNotificationMessage(id, status);
  }

  render() {
    const {
      title,
      status,
    } = this.props;

    return (
      <>
        <button type="button" className="notification__container" onClick={this.removeThisNotification}>
          <h3 className="notification__title">{title}</h3>
          <p className="notification__message">
            <span className="color-blue">{title}</span>
            {' was '}
            <span className="color-yellow">
              {status ? 'added to' : 'removed from'}
            </span>
            {' favorite list'}
          </p>
        </button>
      </>
    );
  }
}

NotificationMessage.propTypes = propTypes;
NotificationMessage.defaultProps = defaultProps;

export default NotificationMessage;
