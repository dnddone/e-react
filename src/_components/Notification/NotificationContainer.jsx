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
              key={`${id}-${status}`}
              title={title}
              status={status}
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
  notificationExpiredAction: () => dispatch(notificationActions.notificationExpired()),
});

const mapStateToProps = state => ({
  notification: state.notification,
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
