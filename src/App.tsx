import React from 'react';
import './App.css';
import Footer from './Components/LayoutArea/Footer/Footer';
import Header from './Components/LayoutArea/Header/Header';
import Main from './Components/LayoutArea/Main/Main';
import Menu from './Components/LayoutArea/Menu/Menu';
import Page404 from './Components/SharedArea/Page404/Page404';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
      
      {/* <h1>Moshe</h1> */}
      {/* <Page404/>
      <Page404 msg='Ofir Not Found......'/> */}
    </div>
  );
}

export default App;
