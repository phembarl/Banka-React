import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const token = sessionStorage.getItem('token');

const GuestWrapper = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (!token ? <Component {...props} /> : <Redirect to="/dashboard" />)
     }
  />
);

GuestWrapper.propTypes = {
  component: PropTypes.shape({}).isRequired,
};


export default GuestWrapper;
