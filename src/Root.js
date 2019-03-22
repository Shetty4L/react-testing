import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import PropTypes from 'prop-types';

const  Root = ({ children, initialState = {} })  => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {children}
    </Provider>
  );
}

Root.propTypes = {
  children: PropTypes.object,
  initialState: PropTypes.object
}

export default Root;
