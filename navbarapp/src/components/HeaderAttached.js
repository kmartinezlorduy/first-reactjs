import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const HeaderAttached = () => (
  <div>
    <Header as='h2' attached='top'>
      Lista de productos
    </Header>
    <Segment attached>
      A continuación encuentra la lista de productos disponibles
    </Segment>
  </div>
)

export default HeaderAttached