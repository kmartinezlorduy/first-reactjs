import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import './ItemCardItems.css';

const ItemCardItems = (props) => (
  <Card.Group className='ItemCardItems'>
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
      <div className='ui two buttons'>
        <Button basic color='green'>
          Agregar a carrito
        </Button>
        <Button basic color='red'>
          Agregar a Favoritos
        </Button>
      </div>
    </Card.Content>
  </Card>
</Card.Group>
)

export default ItemCardItems