import React from 'react';
import Benifit from '../benifit/Benifit';
import Pack from '../pack/Pack';
import Services from '../services/Services';
import Trainer from '../trainer/Trainer';
import Banner from './banner/Banner';

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <Benifit></Benifit>
      <Trainer></Trainer>
      <Pack></Pack>
    </div>
  );
};

export default Home;