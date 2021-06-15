import { getProducts } from '../services/fetch';
import React, {useContext, useState} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {MyContext} from "../contexts/AppContext";

function Products(props) {
    let [responseData, setResponseData] = React.useState(
        //[{id:1,name:"seiko",description:"diverek"}, {id:2,name:"invicta",description:"diverek2"}]
    );
    let { addToBasket } = props;
    const [state, setState] = useContext(MyContext);

    React.useEffect( () => {
        getProducts()
            .then((json) => {
                setResponseData(json)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setResponseData, responseData])


    return (
        <div className="Product">
      <pre>
        <code>
          <h2>Products</h2>
        </code>
        <div>
          {responseData && responseData.map(obj => (
              <div className="product-card">
                  <br></br><br></br>
                  <b>{obj.name}</b><br></br>
                  {obj.description}
                  <div className="buttons-product">

                      {state.isLogged &&
                      <button onClick={() => addToBasket(obj)} className="add-to-cart-button">Add To Cart</button>
                      }
                  </div>
              </div>


          ))}
        </div>
      </pre>
        </div >
    );
}

export default Products;