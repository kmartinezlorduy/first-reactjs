import React, {useState, useEffect} from 'react'
import ItemCardCategory from '../ItemCard/ItemCardCategory'

import '../ItemCard/ItemCardItems.css';
import { Header, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom';




const ItemCategoryContainer = (props) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/categories')
    .then((response) => response.json())
    .then((data) => setCategories(data));
  },[]);

 return (
  <div>
    <Header as='h2' attached='top'>
      Categorias
      
    </Header>
    <Segment attached>
      {props.message} 
    </Segment>
    <div className='ItemCardItems'>

      {categories.map((category) => {
          return (
            <div key={category.id}>
              
                <ItemCardCategory
                  id={category.id}
                  image={category.image}
                  text={category.text}
                  description={category.description}>
                </ItemCardCategory>
              
            </div>
          );
        })}

     
    </div>
  </div>
  );
};

export default ItemCategoryContainer