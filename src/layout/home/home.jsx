import React, { Fragment } from 'react';
import Title from '../../components/title/title';
import './home.css';


const Home = () => (
  <Fragment>
    <Title title="Главная страница" />
    <p className="text">Это главная страница</p>
  </Fragment>
);

export default Home;