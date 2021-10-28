import React, { useContext } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const [items, setItems] = useContext(CartContext);

  return (
    <Header as='h4'>
      <Link to={`/cart`} >
        <Icon name='shopping cart' />
      </Link>
      <Header.Content>Carrito de compras, Total articulos:
        {items.length}</Header.Content>
    </Header>
  );
};

export default CartWidget;
