import React from 'react';
import './style.scss';

export default ({ data, cn }) => (
  <ul className={cn}>
    {data.map((item, idx) => <Item key={idx} name={item.name} active={item.active} />)}
  </ul>
);

const Item = ({ name, active }) => <li className={active ? 'active' : ''}>{name}</li>;