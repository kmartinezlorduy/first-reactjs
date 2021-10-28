import React, { useState, useEffect } from 'react';
import ItemCardItemsDetail from '../../components/ItemCard/ItemCardItemsDetail';
import '../../components/ItemCard/ItemCardItems.css';


const CardDetail = ({ match }) => {
    const [product, setProduct] = useState({});


    const productId = match.params.id;
    useEffect(() => {
        fetch(`http://localhost:3001/products/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [productId]);


    return (
        <div>
            {

                <div>
                    <ItemCardItemsDetail
                        product={product}
                    >
                    </ItemCardItemsDetail>
                </div>

            }
        </div>
    );
};

export default CardDetail;
