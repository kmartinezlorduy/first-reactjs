import React, { useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'


const ItemCounter = (props) => {
    const [rowCount, setRowCount] = useState(0);
    const [stock, setStock] = useState(props.stock);

    // useEffect(() => {
    //   setTimeout(() => {
    //     console.log("changed");
    //     setRowCount(1000);
    //   }, 10000);
    // }, []);

    return (
      <div>
      <div>
        <p>Agregados a carrito {rowCount}</p>
        <p>Stock {stock}</p>
      </div>
      <div className='ui three buttons'>
        
        <Button basic color='green' onClick={() => rowCount < stock ? setRowCount(rowCount + 1): console.log('No hay stock disponible')}>
        Agregar a carrito
        </Button>
        <Button basic color='red' onClick={() => rowCount > 0 ? setRowCount(rowCount - 1) : console.log('No es posible quitar mas de carrito')}>
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
