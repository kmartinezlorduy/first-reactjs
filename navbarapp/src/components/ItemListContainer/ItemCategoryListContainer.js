import React, {useState, useEffect} from 'react'
import ItemCardItems from '../ItemCard/ItemCardItems'

import '../ItemCard/ItemCardItems.css';
import { Header, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom';




const ItemCategoryListContainer = ({ match }) => {

  const [products, setProducts] = useState([]);

  //let categoryId = match.params.id;
  

  useEffect(() => {
    fetch(`http://localhost:3001/products`)
    .then((response) => response.json())
    .then((data) => setProducts(data));
  },[]);

 return (
  <div>
    <Header as='h2' attached='top'>
      Lista de productos
      
    </Header>
    <Segment attached>
      Articulos de categoria
    </Segment>
    <div className='ItemCardItems'>

      {products.map((product) => {
          return (
            <div key={product.id}>
              
                <ItemCardItems
                  id={product.id}
                  img={product.img}
                  item={product.item}
                  category={product.category}
                  description={product.description}
                  price={product.price}>
                </ItemCardItems>
              
            </div>
          );
        })}

   
    </div>
  </div>
  );
};

export default ItemCategoryListContainer