import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item"><NavLink exact to="/">Главная</NavLink></li>
        <li className="navigation__item"><NavLink to="/actors">Актёры</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;