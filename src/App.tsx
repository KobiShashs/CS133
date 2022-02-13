import React from 'react';
import './App.css';
import Page404 from './Components/SharedArea/Page404/Page404';

function App() {
  return (
    <div className="App">
      <h1>Moshe</h1>
      <Page404/>
      <Page404 msg='Ofir Not Found......'/>
    </div>
  );
}

export default App;
