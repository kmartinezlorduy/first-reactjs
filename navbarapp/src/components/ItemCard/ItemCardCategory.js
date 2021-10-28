import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './ItemCardItems.css';
import { Link } from 'react-router-dom';

const ItemCardCategory = (props) => (
  <Card.Group className='ItemCard'>

    <Card>

      <Card.Content>
        <Link to={`/categoria/${props.id}`} >
          <Image
            floated='right'
            size='mini'
            src={props.image}
          />
        </Link>

        <Card.Header><Link to={`/categoria/${props.id}`} >
          {props.text}
        </Link></Card.Header>

        <Card.Meta>{props.category}</Card.Meta>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>


    </Card>

  </Card.Group>
);

export default ItemCardCategory;
