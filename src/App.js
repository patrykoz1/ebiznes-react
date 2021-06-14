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
import Basket from "./components/Basket";

console.log("KONTEKST");
console.log(MyContext);


function App() {
    const [state, setState] = useContext(MyContext);
    //console.log("KONTEKST"+MyContext);
    const [basket, setBasket] = useState([]);

    const addToBasket = (prod) => {
        console.log(prod);
        setBasket([...basket, prod]);
    };

    const removeFromBasket = (prod) => {
        let hardCopy = [...basket];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== basket.id);
        setBasket(hardCopy);
    };
    console.log(basket);
    return (
        <BrowserRouter >
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

      </nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/products">Produkty <span className="sr-only"></span></Link>
                      </li>
                      {!state.isLogged &&
                      <li className="nav-item">
                          <Link className="nav-link" to="/register">Rejestruj sie <span className="sr-only"></span></Link>
                      </li>
                      }
                      {!state.isLogged &&
                      <li className="nav-item">
                          <Link className="nav-link" to="/login">Loguj sie <span className="sr-only"></span></Link>
                      </li>
                      }
                      {state.isLogged &&
                      <Logout />
                      }

                  </ul>
              </div>
          </nav>

        <Route path="/"><Welcome /></Route>
        <Route path="/products"><Products addToBasket={addToBasket} /></Route>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>

        {!state.isLogged &&

        <div className="Basket">
            <Basket basket={basket} addToBasket={addToBasket}></Basket>
        </div>
        }


  </div>


        </BrowserRouter >
  );
}

export default App;
