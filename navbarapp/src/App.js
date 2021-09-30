import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HeaderAttached from './components/HeaderAttached';
import ItemCardItems from './components/ItemCardItems';
import ItemCardGroup from './components/ItemCardGroup';
import HeaderIcon from './components/HeaderIcon';


function App() {
  return (
    <div className="App">
      <NavBar />
      <HeaderIcon></HeaderIcon>
      <HeaderAttached message='Bienvenidos, a continuación nuestra lista de productos' />
      <ItemCardItems
        img='https://i.pinimg.com/736x/ce/e0/a3/cee0a30326f0eaef86e9389bc3a91f31.jpg'
        item='Playstation 4'
        category='Video Juegos'
        description='Consola de video juegos Playstation 4'>
      </ItemCardItems>
      <ItemCardItems
        img='https://www.storeplayer.com/images/stories/virtuemart/product/xb3c2.jpg'
        item='XBox 360 Splim'
        category='Video Juegos'
        description='Consola de video juegos XBox 360 Slim 4GB'>
      </ItemCardItems>      
    </div>
  );
}

export default App;
