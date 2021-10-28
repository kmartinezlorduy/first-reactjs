import React, { useState, useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { CartContext } from '../CartContext/CartContext';

const ItemCounter = ({ data }) => {
  const [rowCount, setRowCount] = useState(parseInt(0));


  console.log({ data });

  const [items, setItems] = useContext(CartContext);


  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("changed");
  //     setRowCount(1000);
  //   }, 10000);
  // }, []);

  function isInCart() {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == data.id) {
        return true;
      }
    }
    return false;
  }

  const updateState = () => {
    const existe = isInCart();
    if (existe) {
      alert(`Este articulo ya se encuentra en el carrito.`);
    } else {
      const arrayTemp = [
        {
          id: data.id, name: data.item, price: data.price,
          image: data.img, detail: data.description
        }
      ];
      setItems(items.concat(arrayTemp));
    }
  };

  const updateStateRemove = () => {
    const arrayTemp = items.filter(function (item) {
      return item.id !== data.id;
    });
    setItems(arrayTemp);
  };

  const updateStateAllRemove = () => {
    setItems([]);
  };


  function addItem() {
    setRowCount(rowCount + 1);
    updateState();
  }

  function removeItem() {
    rowCount > 0 ? setRowCount(rowCount - 1) : setRowCount(0);
    updateStateRemove();
  }

  function removeAllItem() {
    setRowCount(0);
    updateStateAllRemove();
  }

  const handleClickAddItem = () => {
    //      console.log('articulos '+articulos);
    rowCount < data.stock ? addItem() :
      alert(`No hay stock disponible Agregados`);
    console.log(items);
  };

  const handleClickRemoveItem = () => {
    items.length > 0 ? removeItem() : alert(`No es posible quitar`);
  };

  const handleClickAllRemoveItem = () => {
    items.length > 0 ? removeAllItem() : alert(`Ya esta vacio el carrito`);
  };


  return (
    <div>
      <div>
        <p>Agregados a carrito {rowCount}</p>
        <p>Stock inicial: {data.stock}</p>
      </div>
      <div className='ui three buttons'>

        <Button basic color='green' onClick={handleClickAddItem}>
          Agregar a carrito
        </Button>
        <Button basic color='red' onClick={handleClickRemoveItem}>
          Quitar de carrito
        </Button>
        <Button basic color='blue' onClick={handleClickAllRemoveItem}>
          Vaciar carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCounter;
