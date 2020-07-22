import React from 'react';
import Header from '../components/header';

export default props => (
  <div className="main">
    <Header />
    <hr color="#f6f6f6"/>
    <div className="main-content">
        {props.children}
    </div>
  </div>
);
