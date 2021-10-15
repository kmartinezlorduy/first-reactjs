import React, { useState, useEffect } from 'react'
import ItemCardItems from '../../components/ItemCard/ItemCardItems'
import '../../components/ItemCard/ItemCardItems.css';
import { Header, Segment } from 'semantic-ui-react'
//Import
const CardDetail = ({ match }) => {

    const [product, setProduct] = useState({});

    let productId = match.params.id;
    useEffect(() => {
        fetch(`http://localhost:3001/products/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [productId]);


    return (
        <div>
            {
               
                    <div>
                             <ItemCardItems
                                 img={product.img}
                                item={product.item}
                                category={product.category}
                                description={product.description}
                                reserve={product.reserve}
                                stock={product.stock}>
                            </ItemCardItems>
                    </div>
          
            }
        </div>
    )
}

export default CardDetail;