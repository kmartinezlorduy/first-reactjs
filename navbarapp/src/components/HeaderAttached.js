import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const HeaderAttached = (props) => (
  <div>
    <Header as='h2' attached='top'>
      Lista de productos
    </Header>
    <Segment attached>
      {props.message}
    </Segment>
  </div>
)

export default HeaderAttached