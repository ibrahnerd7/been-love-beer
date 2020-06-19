import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import NavbarTop from './containers/NavbarTop';
import BeerList from './components/BeerList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <BeerList />
    </div>
  );
}

export default App;
