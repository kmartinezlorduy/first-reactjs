import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext/CartContext'; 
import { Header, Image, Table,Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Cart = () => {

  const [items, setItems] = useContext(CartContext);

  function totalizar(){      
    let total = 0;
    for(let i = 0; i < items.length; i++) {
      total = total + items[i].price;
    } 
    return total;      
  }

  return (
    items.length > 0 ?   
  <Table basic='very' celled collapsing>
    <Table.Body>
    {items.map((item) => {
          return (
            <div key={item.id}>
              <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Image src={item.image} rounded size='mini' />
                          <Header.Content>
                            {item.name}
                            <Header.Subheader>{item.detail}</Header.Subheader>
                            <Header.Subheader>Precio: ${item.price}</Header.Subheader>                            
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell> 
                      <Link to={`/detail/${item.id}`} >Ir al detalle</Link>
                    </Table.Cell>
                    </Table.Row>               
            </div>
          );
        })}



          
    </Table.Body>
    <h2>Total a pagar: ${parseInt(totalizar())}</h2>
  </Table>
  : <h3>No hay articulos comprados</h3>
  );
};

export default Cart