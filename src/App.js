// @ts-ignore
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Link,Route,Router,Switch} from 'react-router-dom';
import Products from "./components/Products";
import Welcome from "./Welcome";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Register from "./components/Register";


import {MyContext} from "./contexts/AppContext";
import React, {useState, useContext, useEffect} from 'react';
import Basket from "./components/Basket";
import {getUserById} from "./services/fetch";


function App() {
    const [state, setState] = useContext(MyContext);
    const [loading,setLoading] = useState(true);
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

    const readUrlParamsFromAuthentication = () => {
        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var userStr = url.searchParams.get("user-id");
        console.log(userStr);
        var userId = null;
        var userEmail = null;
        //if (userStr && userStr.startsWith("User(")) {
        if (userStr) {
            /*var ind1 = userStr.lastIndexOf("User(") + 5;
            var ind2 = userStr.indexOf(",");
            userId = userStr.substring(ind1, ind2);

            ind1 = userStr.lastIndexOf("),") + 2;
            ind2 = userStr.lastIndexOf(")");*/

            //userEmail = userStr.substring(ind1, ind2);

            getUserById(userStr).then(user=>
                {
                    //localStorage.setItem("email", user.email);
                    //localStorage.setItem("isLoggedIn", true);
                    //localStorage.setItem("userId", user.id);
                    //setState({ email: user.email, isLoggedIn: true, userId: user.id })
                    localStorage.setItem('email', user.email);
                    setState({ email: user.email, isLogged: true });
                    console.log("TUTAAAAJ");
                    console.log(user.email,user.id,state.isLoggedIn);
                    setLoading(false);
                }
            );
            console.log("UserStr");

            /*localStorage.setItem("email", userEmail);
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userId", userId);
            setState({ email: userEmail, isLoggedIn: true, userId: userId })*/

            //window.location.href="http://localhost:3000/";
        }

        //console.log(" user id =", userId, "email =", userEmail);
    }

    useEffect(() => {
        readUrlParamsFromAuthentication();
    }, [])

    /*if(loading)
    {
        return(<h1>Ladowanie</h1>);
    }*/

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
        <Switch>
        <Route exact path="/"><Welcome /></Route>
        <Route exact path="/products" component={Products}><Products addToBasket={addToBasket} /></Route>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/logout" component={Logout}/>
        </Switch>
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
