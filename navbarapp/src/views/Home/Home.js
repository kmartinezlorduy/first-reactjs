import React from 'react';
import ItemListContainer from
    '../../components/ItemListContainer/ItemListContainer';

const Home = () => {
    return (
        <div>
            <ItemListContainer
                message='Bienvenido, a continuación nuestra lista de productos'>
            </ItemListContainer>
        </div>
    );
};

export default Home;
