import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import {DataContainer} from './components/DataComponent.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Initial Page</h1>
        <NavLink to="/fetchData">Go to fetch data</NavLink>
        <Route path="/fetchData" component={DataContainer} />
      </BrowserRouter>
    </>
  );
}

export default App;
