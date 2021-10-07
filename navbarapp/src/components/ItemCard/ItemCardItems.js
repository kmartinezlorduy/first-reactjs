import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import './ItemCardItems.css';
import ItemCounter from '../ItemCount/ItemCount'

const ItemCardItems = (props) => (
  <Card.Group className='ItemCard'>
  <Card>
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src={props.img}
      />
      <Card.Header>{props.item}</Card.Header>
      <Card.Meta>{props.category}</Card.Meta>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>      
      <ItemCounter stock={props.stock} reserve={props.reserve} ></ItemCounter>
    </Card.Content>
    
  </Card>
</Card.Group>
)

export default ItemCardItems