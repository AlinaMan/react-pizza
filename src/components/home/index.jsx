import React from 'react';
import Filter from '../filters';
import Sort from '../filters/sort';
import './style.scss';

export default () => (
  <>
    <ContentTop />
    <Content />
  </>
);

const ContentTop = () => (
  <div className="content__top">
    <Filter f={filters} />
    <Sort by={sortby} />
  </div>
);

const Content = () => (
  <div className="content">
    {/* <Title />
    <Items /> */}
  </div>
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