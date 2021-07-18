// @ts-ignore
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Link,Route,Router} from 'react-router-dom';
import Products from "./components/Products";
import Welcome from "./Welcome";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Register from "./components/Register";


import {MyContext} from "./contexts/AppContext";
import React, { useState, useContext } from 'react';
import Basket from "./components/Basket";


function App() {
    const [state, setState] = useContext(MyContext);
    //console.log("state");
    const [basket, setBasket] = useState([]);
    //console.log(state.isLogged);
    const addToBasket = (prod) => {
        //console.log(prod);
        setBasket([...basket, prod]);
        //setBasket(basket.push(prod))
    };
    //console.log("Cały basket");
    //console.log(basket);

    return (
        <BrowserRouter >
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

      </nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link className="nav-link" to="/">Home </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/products">Produkty </Link>
                      </li>
                      {!state.isLogged &&
                      <li className="nav-item">
                          <Link className="nav-link" to="/register">Rejestruj sie </Link>
                      </li>
                      }
                      {!state.isLogged &&
                      <li className="nav-item">
                          <Link className="nav-link" to="/login">Loguj sie </Link>
                      </li>
                      }
                      {state.isLogged &&
                      <li className="nav-item">

                      <Link className="nav-link" to="/logout">Wyloguj sie </Link>
                      </li>
                      }

                  </ul>
              </div>
          </nav>

        <Route path="/"><Welcome /></Route>
        <Route path="/products"><Products addToBasket={addToBasket} /></Route>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>

        {state.isLogged &&

        <div className="Basket">
            <Basket basket={basket} addToBasket={addToBasket} setBasket={setBasket}></Basket>
        </div>
        }


  </div>


        </BrowserRouter >
  );
}

export default App;
