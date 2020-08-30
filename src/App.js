import React from 'react';
import './App.css';
import Header from './components/Header'
import NavbarMenu from './components/Navbar'
import Main from './components/Main'
import Biograf from './components/Biograf'
import Creation from './components/Creation'
import Gallery from './components/Gallery'

import { BrowserRouter, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <NavbarMenu />
        <div className='app-content'>

          <Route exact path='/' component={Main} />
          <Route path='/main' component={Main} />
          <Route path='/biograf' component={Biograf} />
          <Route path='/creation' component={Creation} />
          <Route path='/gallery' component={Gallery} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
