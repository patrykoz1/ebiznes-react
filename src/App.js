// @ts-ignore
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Products from "./Products";
import Welcome from "./Welcome";
import Categories from "./Categories";
import Orders from "./Orders";
import Shippings from "./Shippings";
import Invoices from "./Invoices";
import Purchases from "./Purchases";
import Comments from "./Comments";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <div>
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/shippings">Shippings</Link></li>
        <li><Link to="/purchases">Purchases</Link></li>
        <li><Link to="/invoices">Invoices</Link></li>
        <li><Link to="/comments">Comments</Link></li>

      </ul>
        <Route path="/" component={Welcome}/>
        <Route path="/products" component={Products}/>
        <Route path="/categories" component={Categories}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/shippings" component={Shippings}/>
        <Route path="/purchases" component={Purchases}/>
        <Route path="/invoices" component={Invoices}/>
        <Route path="/comments" component={Comments}/>



      </BrowserRouter>
  </div>
    </div>
  );
}

export default App;
