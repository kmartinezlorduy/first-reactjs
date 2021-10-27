//import logo from './assets/images/logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/ItemListContainer/CartWidget';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { CartProvider } from './components/CartContext/CartContext';
import Home from './views/Home/Home';
import Categories from './views/categories/Category';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import CardDetail from './views/CardDetail/CardDetail';
import CategoryDetail from './views/CardDetail/CategoryDetail';
import DropDownCategory from './components/DropDown/DropDownCategory'


function App() {
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <NavBar />
        <CartWidget></CartWidget>  
        <DropDownCategory></DropDownCategory>      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />

          <Route path="/categoria/:id" component={CategoryDetail} />
          <Route path="/categories" component={Categories} />
          <Route path="/detail/:id" component={CardDetail} />
        </Switch>
       
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
