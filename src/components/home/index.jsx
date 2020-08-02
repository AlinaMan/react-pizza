import React from 'react';
import Filter from '../filters';
import Sort from '../filters/sort';
import Items from '../items';
import './style.scss';

export default () => (
  <>
    <div className="content__top">
      <Filter data={filters} cn='filters' />
      <Sort by={sortby} />
    </div>
    <div className="content">
      <h2 className="title">Все пиццы</h2>
      <Items items={items} />
    </div>
  </>
);

const filters = [
  {
    name : 'Все',
    active: 1,
  },
  {
    name : 'Мясные',
    active: 0,
  }, 
  {
    name : 'Вегетарианская',
    active: 0,
  },
  {
    name : 'Гриль',
    active: 0,
  },
  {
    name : 'Острые',
    active: 0,
  },
  {
    name : 'Закрытые',
    active: 0,
  },
];
const sortby = [
  {
    name: 'Популярности',
    active: 1,
  },
  {
    name: 'Цене',
    active: 0,
  },
  {
    name: 'Алфавиту',
    active: 0,
  },
];

const items = [
  {
    name: "Чизбургер-пицца",
    img_path: "/images/img1.jpg",
    min_price: 395
  },
  {
    name: "Чизбургер-пицца",
    img_path: "/images/img1.jpg",
    min_price: 395
  },
  {
    name: "Чизбургер-пицца",
    img_path: "/images/img1.jpg",
    min_price: 395
  },
  {
    name: "Чизбургер-пицца",
    img_path: "/images/img1.jpg",
    min_price: 395
  },
  {
    name: "Чизбургер-пицца",
    img_path: "/images/img1.jpg",
    min_price: 395
  },
  {
    name: "Чизбургер-пицца",
    img_path: "/images/img1.jpg",
    min_price: 395
  },
];