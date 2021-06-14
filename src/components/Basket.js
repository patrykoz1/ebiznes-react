import buy from './services/fetch'
function Basket(props) {
    const { basket, addToBasket } = props;

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
            </pre>
        </div>
        </div>
    );
}

export default Basket;