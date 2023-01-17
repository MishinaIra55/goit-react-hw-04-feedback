import React from 'react';
import PropTypes from 'prop-types';
const  Notification = ({ message } ) => (
  <div>
    <span>{message}</span>
  </div>
);

export default Notification;


Notification.proTypes = {
  message:PropTypes.string.isRequired,
}
