import { getProduct, getSpecificProduct } from '../services/FetchApi';
import React, { useState, useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import ItemComments from './ItemComment';
import { AuthContext } from '../AuthStore'
import { addComment } from '../services/FetchApi';
import { set } from 'js-cookie';

function Product(props) {
    const location = useLocation()
    const par_id = props.match.params.id;
    let [responseData, setResponseData] = React.useState(
        //[{id:1,name:"seiko",description:"diverek"}, {id:2,name:"invicta",description:"diverek2"}]
    );
    const [state, setState] = useContext(AuthContext);

    React.useEffect(() => {
        getSpecificProduct(par_id)
            .then((json) => {
                setResponseData(json)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setResponseData, responseData])


    return (
        <div className="Product">
            {responseData && responseData.map(obj => (
                <pre>
          <code>
            <h2> {obj.name} </h2>
          </code>
          <div>
            <div className="product-card">
              <div className="product-desc">{obj.description}</div>
              <div>category: {obj.category}</div>
            </div>
          </div>

        </pre>
            ))}
        </div>
    );
}

export default Product;