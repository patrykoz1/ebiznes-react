import { getProducts } from '../services/fetch';
import React, {useContext, useState} from 'react';
import {MyContext} from "../contexts/AppContext";

function Products(props) {
    let [responseData, setResponseData] = React.useState(
        //[{id:1,name:"seiko",description:"diverek"}, {id:2,name:"invicta",description:"diverek2"}]
    );
    let { addToBasket } = props;
    const [state, setState] = useContext(MyContext);

    React.useEffect(() => {
        getProducts()
            .then((json) => {
                setResponseData(json)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        <div className="Product">
      <pre>
        <code>
          <h2>Zegarki</h2>
        </code>
        <div>
          {responseData && responseData.map(x => (
              <div className="product-card">
                  <br></br><br></br>
                  <b>{x.name}</b><br></br>
                  {x.description}
                  <div className="buttons-product">

                      {state.isLogged &&
                      <button onClick={() => addToBasket(x)} className="add-to-cart-button">Dodaj do koszyka</button>
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