import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './ItemCardItems.css';
import ItemCounter from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemCardItemsDetail = ({ product }) => {
  return (
    <Card.Group className='ItemCard'>

      <Card>

        <Card.Content>
          <Link to={`/detail/${product.id}`} >
            <Image
              floated='right'
              size='mini'
              src={product.img}
            />
          </Link>

          <Card.Header>
            <Link to={`/detail/${product.id}`} >{product.item}</Link>
          </Card.Header>

          <Card.Meta>{product.category}</Card.Meta>
          <Card.Description>
            {product.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          Precio: {product.price}$
        </Card.Content>
        <Card.Content extra>
          <ItemCounter data={product} />
        </Card.Content>

      </Card>

    </Card.Group>
  );
};

export default ItemCardItemsDetail;
