import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const CartWidget = () => (
  <Header as='h4'>
    <Icon name='shopping cart' />
    <Header.Content>Carrito de compras</Header.Content>
  </Header>
)

export default CartWidget