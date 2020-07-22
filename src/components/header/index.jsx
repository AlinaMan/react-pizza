import React from 'react';
import LogoImg from '../../assets/pizza-logo.svg';
import { HeadButton } from '../buttons';
import './style.scss';

export default () => (
  <div className="header">
    <Logo />
    <HeadButton />
  </div>
);

const Logo = () => (
  <div className="header__logo">
    <img width="38" src={LogoImg} alt="Pizza logo" />
    <div>
      <h1>React Pizza</h1>
      <p>самая вкусная пицца во вселенной</p>
    </div>
  </div>
);