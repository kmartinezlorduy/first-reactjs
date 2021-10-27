import React, {useContext} from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { CartContext } from '../CartContext/CartContext';


const CartWidget = () => {
  const [items, setItems] = useContext(CartContext);
  
  return (
  <Header as='h4'>
    <Icon name='shopping cart' />
    <Header.Content>Carrito de compras, Total articulos: {items.length}</Header.Content>
  </Header>
  );
};

export default CartWidget