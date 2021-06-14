// @ts-ignore
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Link,Route,Router} from 'react-router-dom';
import Products from "./components/Products";
import Welcome from "./Welcome";
import Categories from "./components/Categories";
import Orders from "./components/Orders";
import Shippings from "./components/Shippings";
import Invoices from "./components/Invoices";
import Purchases from "./components/Purchases";
import Comments from "./components/Comments";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Register from "./components/Register";


import {MyContext} from "./contexts/AppContext";
import React, { useState, useContext } from 'react';

console.log("KONTEKST");
console.log(MyContext);


function App() {
    const [state, setState] = useContext(MyContext);
    //console.log("KONTEKST"+MyContext);

    return (
        <BrowserRouter >
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

      </nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/products">Produkty <span className="sr-only"></span></a>
                      </li>
                      {!state.isLogged &&
                      <li className="nav-item">
                          <a className="nav-link" href="/register">Rejestruj sie <span className="sr-only"></span></a>
                      </li>
                      }
                      {!state.isLogged &&
                      <li className="nav-item">
                          <a className="nav-link" href="/login">Loguj sie <span className="sr-only"></span></a>
                      </li>
                      }
                      {state.isLogged &&
                      <Logout />
                      }

                  </ul>
              </div>
          </nav>

        <Route path="/" component={Welcome}/>
        <Route path="/products" component={Products}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>

  </div>
        </BrowserRouter >
  );
}

export default App;
