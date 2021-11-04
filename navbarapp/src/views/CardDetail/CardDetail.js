import React, { useState, useEffect } from 'react';
import ItemCardItemsDetail from '../../components/ItemCard/ItemCardItemsDetail';
import '../../components/ItemCard/ItemCardItems.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';


const CardDetail = ({ match }) => {
    const [product, setProduct] = useState({});


    const productId = match.params.id;


    useEffect(() => {
        const requestData = async () => {
            const docs = [];
            const q = query(collection(db, 'products'), where('id',
                '==', parseInt(productId)));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setProduct({ ...doc.data(), idGen: doc.id });
            });
        };
        requestData();
    }, []);


    /* useEffect(() => {
        const requestData = async () => {
            const docs = [];
            const productsData = await getDocs(collection(db, 'products'));
            productsData.forEach((document) => {
                docs.push({ ...document.data(), idGen: document.id });
            });
            const array = docs.filter((docs) => productId == docs.id);
            setProduct(array[0]);
        };
        requestData();
    }, []); */

    /*     useEffect(() => {
            fetch(`http://localhost:3001/products/${productId}`)
                .then((response) => response.json())
                .then((data) => setProduct(data));
        }, [productId]); */


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
