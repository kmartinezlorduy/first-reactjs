import React, { useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'


const ItemCounter = (props) => {
    const [rowCount, setRowCount] = useState(parseInt(0));
    const [stock, setStock] = useState(parseInt(props.stock));

    // useEffect(() => {
    //   setTimeout(() => {
    //     console.log("changed");
    //     setRowCount(1000);
    //   }, 10000);
    // }, []);

    const handleClickAddItem = () => {
      rowCount < props.stock ? setRowCount(rowCount + 1): alert(`No hay stock disponible Agregados`);
    }

    const handleClickRemoveItem = () => {
      rowCount > 0 ? setRowCount(rowCount - 1) : alert(`No es posible quitar mas de carrito`)
    }


    return (
      <div>
      <div>
        <p>Agregados a carrito {rowCount}</p>
        <p>Stock inicial: {props.stock}</p>
      </div>
      <div className='ui three buttons'>
        
        <Button basic color='green' onClick={handleClickAddItem}>
        Agregar a carrito
        </Button>
        <Button basic color='red' onClick={handleClickRemoveItem}>
        Quitar de carrito
        </Button>
        <Button basic color='blue'>
        Agregar a favoritos
        </Button>        
      </div>
      </div>
    );
 };

 export default ItemCounter;
