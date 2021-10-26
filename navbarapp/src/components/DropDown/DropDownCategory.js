import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const friendOptions = [
    {
      key: 'Video juegos',
      text: 'Video juegos',
      value: 'Video juegos',
      image: { avatar: true, src: 'https://images.vexels.com/media/users/3/217118/isolated/preview/76ff9b915123c0b380f46e53c9479639-ilustracion-de-controlador-de-consola-de-oldschool.png' },
    },
    {
      key: 'Portatiles',
      text: 'Portatiles',
      value: 'Portatiles',
      image: { avatar: true, src: 'https://pngimg.com/uploads/laptop/laptop_PNG101763.png' },
    },
    {
      key: 'Celulares',
      text: 'Celulares',
      value: 'Celulares',
      image: { avatar: true, src: 'https://celuclock.com.co/wp-content/uploads/2020/12/Puro-0-3-Nude-TPU-Case-for-iPhone-12-Pro-Max-Transparent-8033830296208-16102020-01-p.jpg' },
    },
    {
      key: 'Accesorios',
      text: 'Accesorios',
      value: 'Accesorios',
      image: { avatar: true, src: 'https://eternalarcade.com/wp-content/uploads/2019/09/Mejores-accesorios-gaming.jpg' },
    },
  ]

const DropDownCategory = () => (
    <span>
    
    <Dropdown 
      inline
      options={friendOptions}
      defaultValue='sssddd'
    />
  </span>
)

export default DropDownCategory