import React, {createContext, useState} from 'react';



export const ArticuloContext = createContext();

export const ArticuloProvider = ({objetosChild}) => {
    const [articulos, setArticulos] = useState(
        [{ id: 123, name: 'Keyboard Dell articulooooo', price: 20},]
    );

    return (
        <ArticuloContext.Provider value={[articulos, setArticulos]}>
            {objetosChild}
        </ArticuloContext.Provider>
    )
};
