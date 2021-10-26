import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import './ItemCardItems.css';
import ItemCounter from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

const ItemCardItemsDetail = (props) => (
  <Card.Group className='ItemCard'>

    <Card>

      <Card.Content>
        <Link to={`/detail/${props.id}`} >
          <Image
            floated='right'
            size='mini'
            src={props.img}
          />
        </Link>

        <Card.Header><Link to={`/detail/${props.id}`} >{props.item}</Link></Card.Header>

        <Card.Meta>{props.category}</Card.Meta>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      Precio: {props.price}$
      </Card.Content>
      <Card.Content extra>
        <ItemCounter stock={props.stock} reserve={props.reserve} ></ItemCounter>
      </Card.Content>

    </Card>

  </Card.Group>
)

export default ItemCardItemsDetail