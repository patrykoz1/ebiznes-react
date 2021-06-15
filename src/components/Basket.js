import {buyProducts} from '../services/fetch'
import {Link} from "react-router-dom";
import React, {useContext} from "react";
import {MyContext} from "../contexts/AppContext";
function Basket(props) {
    const { basket, addToBasket } = props;
    const [state, setState] = useContext(MyContext);

    const result = basket.map(prod => prod.id);//array with ids
    const res_len= result.length;
    function buy(){
        //buyProducts(result);
        console.log(result);
    }
    return (
        <div>
        <div className="shopping-cart">
            Koszyk:
            <pre>
                <ul>
                    {basket.length === 0 && <div>Kup coś... ;) </div>}
                    {basket && basket.map(prod => (
                        <div >
                            {prod.name}
                        </div>
                    ))}
                </ul>


                    <div className="buttons-product">
                    <button onClick={() => buy()} className="add-to-cart-button">Kup</button>
                    </div>


            </pre>
        </div>
        </div>
    );
}

export default Basket;