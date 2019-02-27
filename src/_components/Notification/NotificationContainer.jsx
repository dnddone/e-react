import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  string,
  number,
  func,
  arrayOf,
  shape,
} from 'prop-types';
// import { CSSTransitionGroup } from 'react-transition-group';

import NotificationMessage from './NotificationMessage';
import { notificationActions } from '../../_actions';

const propTypes = {
  notification: arrayOf(shape({
    id: number,
    title: string,
    status: string,
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
      // <CSSTransitionGroup transitionName="notification">
      <div className="notification">
        {notification.map(({ id, title, status }) => (
          <NotificationMessage
            id={id}
            title={title}
            status={status}
            removeNotificationMessage={notificationExpiredAction}
          />
        ))}
      </div>
      // </CSSTransitionGroup>
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
