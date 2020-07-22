import React from 'react';
import './style.scss';

export default ({ f }) => (
  <ul className="filters">
    {f.map((item, idx) => <Filter key={idx} name={item.name} active={item.active} />)}
  </ul>
);

const Filter = ({ name, active }) => <li className={active ? 'active' : ''}>{name}</li>;