import React from 'react'
import ItemCardItems from '../ItemCard/ItemCardItems'
import '../ItemCard/ItemCardItems.css';
import { Header, Segment } from 'semantic-ui-react'

const ItemListContainer = (props) => (
  <div>
    <Header as='h2' attached='top'>
      Lista de productos
    </Header>
    <Segment attached>
      {props.message}
    </Segment>
    <div className='ItemCardItems'>
      <ItemCardItems
        img='https://i.pinimg.com/736x/ce/e0/a3/cee0a30326f0eaef86e9389bc3a91f31.jpg'
        item='Playstation 4'
        category='Video Juegos'
        description='Consola de video juegos Playstation 4'
        stock='5'>
      </ItemCardItems>
      <ItemCardItems
        img='https://www.storeplayer.com/images/stories/virtuemart/product/xb3c2.jpg'
        item='XBox 360 Splim'
        category='Video Juegos'
        description='Consola de video juegos XBox 360 Slim 4GB'
        stock='15'>
      </ItemCardItems>
      <ItemCardItems
        img='https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg'
        item='Nintendo Switch'
        category='Video Juegos'
        description='Consola de video juegos Nintendo Switch with Neon'
        stock='8'>
      </ItemCardItems>
      <ItemCardItems
        img='https://www.hd-tecnologia.com/imagenes/articulos/2018/11/Nintendo-no-lanzar%C3%A1-una-Nintendo-64-Classic-por-ahora.jpg'
        item='Nintendo 64'
        category='Video Juegos'
        description='Consola de video juegos Nintendo 64 Classic'
        stock='10'>
      </ItemCardItems>
    </div>
  </div>
)

export default ItemListContainer