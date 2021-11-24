import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import envio from './envio.png'
import './App.css';
import './styles.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div class="container px-4">
            <img src={logo} className="App-logo" alt="logo" />
            <a class="navbar-brand" href="#page-top">DHL</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#services">Servicios</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contáctanos</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <header class="bg-primary bg-gradient text-white">
          <div class="container px-4 text-center">
            <h1 class="fw-bolder">Bienvenido a DHL-Colombia</h1>
            <p class="lead">Entregamos tus paquetes con el mayor cuidado y rapidez</p>
            <p class="lead">Llegamos a tu casa y hacemos el trabajo por ti</p>
            <a class="btn btn-lg btn-light" href="#about">Registrate y programa tus envíos</a>
          </div>
          <div class="container px-5">
            <div class="row gx-5 align-items-center justify-content-center">
              <div class="col-lg-8 col-xl-7 col-xxl-6">
                <form>
                  <h3>INGRESA</h3>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" class ="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class ="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
              <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src={envio} alt="..." /></div>
            </div>
          </div>
        </header>
        <footer class="py-3 bg-dark fixed-bottom">
          <div class="container px-4"><p class="m-0 text-center text-white">Copyright &copy; DHL 2021</p></div>
        </footer>
      </Fragment>
    );
  }
}

export default App;
