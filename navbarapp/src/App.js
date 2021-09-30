import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HeaderAttached from './components/HeaderAttached';
import ItemCardItems from './components/ItemCardItems';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeaderAttached/>
      <ItemCardItems/>
    </div>
  );
}

export default App;
