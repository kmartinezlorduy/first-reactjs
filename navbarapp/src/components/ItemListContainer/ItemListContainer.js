import React, { useState, useEffect } from 'react';
import ItemCardItems from '../ItemCard/ItemCardItems';
import '../ItemCard/ItemCardItems.css';
import { Header, Segment } from 'semantic-ui-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const docs = [];
      const productsData = await getDocs(collection(db, 'products'));
      productsData.forEach((document) => {
        docs.push({ ...document.data(), idGen: document.id });
      });
      setProducts(docs);
    };
    requestData();
  }, []);

  /* useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []); */

  return (
    <div>
      <Header as='h2' attached='top'>
        Lista de productos

      </Header>
      <Segment attached>
        {props.message}
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

export default ItemListContainer;
