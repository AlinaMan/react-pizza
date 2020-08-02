import React from 'react';
import { ClearButton, CountButton } from '../buttons';
import './style.scss';

export default ({ data }) => (
  <div className="basket__content">
    {data.map((item, idx) => <Item key={idx} data={item} />)}
  </div>
); 

const Item = ({ data }) => {
  return (
    <div className="basket__item">
      <div className="basket__item-wrapper">
        <div className="info">
          <img src={data.img_path} alt="Pizza" />
          <div className="description">
            <h3>{data.name}</h3>
            <p>{data.dough}</p>
          </div>
        </div>
        <div className="count-price-wrapper">
          <div className="count">
            <CountButton type='minus' />
            <b>{data.amount}</b>
            <CountButton type='plus' />
          </div>
          <div className="price">
            <b>{data.min_price * data.amount} ₽</b>
          </div>
        </div>
      </div>
      <div className="basket__item-remove">
        <ClearButton />
      </div>
    </div>
  );
}