import {buyProducts} from '../services/fetch'
import {Link} from "react-router-dom";
import React, {useContext, useState} from "react";
import {MyContext} from "../contexts/AppContext";


function Basket(props) {
    const { basket, addToBasket,setBasket } = props;
    const [state, setState] = useContext(MyContext);
    console.log("To są propsy: ");
    console.log(props);

    function buy(){
        const result = basket.map(prod => prod.id);//array with ids
        window.alert("Świetnie! Twoje produkty zostały zakupione!");
        //buyProducts(result);
        setBasket([basket,[]]);
        
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
                {
                    basket.length > 0 && state.isLogged &&
                        <div className="buttons-product">
                            <button onClick={() => buy()} className="add-to-cart-button">Kup</button>
                        </div>
                }
            </pre>
        </div>
        </div>
    );
}

export default Basket;