//import logo from './assets/images/logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/ItemListContainer/CartWidget';



function App() {
  return (
    <div className="App">
      <NavBar />
      <CartWidget></CartWidget>
      <ItemListContainer message='Bienvenidos, a continuación nuestra lista de productos' /> 
    </div>
  );
}

export default App;
