//import logo from './assets/images/logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/ItemListContainer/CartWidget';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import CardDetail from './views/CardDetail/CardDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <CartWidget></CartWidget>        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/detail/:id" component={CardDetail} />
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
