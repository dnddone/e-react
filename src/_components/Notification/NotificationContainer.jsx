import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  string,
  bool,
  number,
  func,
  arrayOf,
  shape,
} from 'prop-types';

import NotificationMessage from './NotificationMessage';
import { notificationActions } from '../../_actions';

const propTypes = {
  notification: arrayOf(shape({
    id: number,
    title: string,
    status: bool,
  })),
  notificationExpiredAction: func,
};

const defaultProps = {
  notification: [],
  notificationExpiredAction: () => {},
};

class NotificationContainer extends PureComponent {
  render() {
    const {
      notification,
      notificationExpiredAction,
    } = this.props;

    return (
      <>
        <div className="notification">
          {notification.map(({ id, title, status }) => (
            <NotificationMessage
              id={id}
              title={title}
              status={status}
              key={`${id}-${status}`}
              removeNotificationMessage={notificationExpiredAction}
            />
          ))}
        </div>
      </>
    );
  }
}

NotificationContainer.propTypes = propTypes;
NotificationContainer.defaultProps = defaultProps;

const mapDispatchToProps = dispatch => ({
  notificationExpiredAction: (id, status) =>
    dispatch(notificationActions.notificationExpired(id, status)),
});

const mapStateToProps = state => ({
  notification: state.notification,
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
