import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Bestsellers from './components/Bestsellers/Bestsellers';
import Fall from './components/Fall/Fall';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';

import data from './components/data/data';

function App() {

  return (
    <div className="App">
      <Header/>
      <Hero />
      <Bestsellers />
      <Fall />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
