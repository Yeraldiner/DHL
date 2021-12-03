import { Layout } from './componentes/Layout/Layout';
import React, { Component, Fragment } from 'react';
import { Footer } from './componentes/Footer/Footer';
import './App.css';
import { Rutas } from './Rutas.js'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Layout />
          <Rutas />
          <Footer />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
