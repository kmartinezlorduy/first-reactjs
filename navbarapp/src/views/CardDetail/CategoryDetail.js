import React from 'react'
import ItemCategoryListContainer from '../../components/ItemListContainer/ItemCategoryListContainer';

const CategoryDetail = (props) => {
    console.log(props.match.params.id);
    return (
        <div>
            <ItemCategoryListContainer idCategory={props.match.params.id}  message='Bienvenidos, a continuación nuestra lista de productos' /> 
        </div>
    )
}

export default CategoryDetail