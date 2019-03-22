import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import PropTypes from 'prop-types';

const  Root = (props)  => {
  return (
    <Provider store={createStore(reducers, {})}>
      {props.children}
    </Provider>
  );
}

Root.propTypes = {
  children: PropTypes.object
}

export default Root;
