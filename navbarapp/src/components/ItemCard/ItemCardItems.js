import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './ItemCardItems.css';
import { Link } from 'react-router-dom';

const ItemCardItems = (props) => (
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

        <Card.Header>
          <Link to={`/detail/${props.id}`} >{props.item}</Link>
        </Card.Header>

        <Card.Meta>{props.category}</Card.Meta>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        Precio: {props.price}$
      </Card.Content>

    </Card>

  </Card.Group>
);
export default ItemCardItems;
