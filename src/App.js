import './App.css';
import React from 'react';
import Explorer from './components/Explorer';
import Contacts from './components/Contacts';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Moonshot from './components/Projects/Moonshot';
import Culpa from './components/Projects/Culpa';
import UberEats from './components/Projects/UberEats';
import Pokemon from './components/Projects/Pokemon';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <div className="App">
      <HashRouter >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Explorer />} />
          <Route path="/Moonshot" element={<Moonshot />} />
          <Route path="/Culpa" element={<Culpa />} />
          <Route path="/UberEats" element={<UberEats />} />
          <Route path="/Pokemon" element={<Pokemon />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;