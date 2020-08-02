import React from 'react';
import Select from '../filters';
import { ItemButton } from '../buttons';
import './style.scss';

export default ({ items }) => (
  <div className="content__items">
    {items.map((item, idx) => <Item key={idx} data={item} />)}
  </div>
); 

const Item = ({ data }) => {
  return (
    <div className="content__item">
      <img src={data.img_path} alt=""/>
      <h4>{data.name}</h4>
      <div className="select-block">
        <Select data={types} cn='select' />
        <Select data={width} cn='select' />
      </div>
      <div className="content__item__bottom">
        <span>от {data.min_price} ₽</span>
        <ItemButton />
      </div>
    </div>
  );
}

const types = [
  {
    name: 'Тонкое',
    active: 1
  },
  {
    name: 'Традиционное',
    active: 0
  }
];
const width = [
  {
    name: '26 см',
    active: 1
  },
  {
    name: '30 см',
    active: 0
  },
  {
    name: '40 см',
    active: 0
  },
];