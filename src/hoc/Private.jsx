import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


const Private = ({
  component: Component,
  ...rest
}) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props => (!token ? <Redirect to="/login" /> : <Component {...props} />)
     }
    />
  );
};

Private.propTypes = {
  component: PropTypes.shape({}).isRequired,
};

export default Private;
