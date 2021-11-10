import React, { Fragment, useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

import { db, serverStamp } from '../../firebase';

const FormCart = (props) => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        usuario: '',
        ciudad: '',
        direccion: '',
        fecha: serverStamp.now(),
        descripcion: '',
        valor: 0
    });

    const [orden, setOrden] = useState();
    const [total, setTotal] = useState(props.total);


    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    };

    const enviarDatos = async (event) => {
        event.preventDefault();
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido);
        // Add a new document with a generated id.   
        const docRef = await addDoc(collection(db, 'compras'), {
            nombre: datos.nombre,
            apellido: datos.apellido,
            usuario: datos.email,
            ciudad: datos.ciudad,
            direccion: datos.direccion,
            fecha: serverStamp.now(),
            descripcion: 'Compra PSE',
            valor: total
        });
        console.log('ID Orden: ', docRef.id);
        setOrden(docRef.id);
        event.target.reset();
    };

    return (
        <Fragment>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre"
                        className="form-control"
                        onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido"
                        className="form-control"
                        onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Email"
                        className="form-control"
                        onChange={handleInputChange} name="email"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Ciudad"
                        className="form-control"
                        onChange={handleInputChange} name="ciudad"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Direccion"
                        className="form-control"
                        onChange={handleInputChange} name="direccion"></input>
                </div>
                <button type="submit"
                    className="btn btn-primary">Finalizar compra</button>
            </form>
            <ul>
                <li>ID Orden: {orden}</li>
            </ul>
        </Fragment>
    );
};

export default FormCart;
