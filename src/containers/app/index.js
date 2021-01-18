import React from 'react';
import PropTypes from 'prop-types';

const App = ({ title = 'Ping Pong Keeper' }) => <div>{title}</div>;

App.propTypes = {
  title: PropTypes.string.isRequired
};

export default App;
