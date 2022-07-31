import React from 'react'
import { Container } from 'react-bootstrap'
import Items from '../item/Items';

function ItemList({product}) {
  return (
    
    <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
      {product.map((element) => (
        <Items productos={element} key={element.id} />
      ))}
    </Container>

  )
}

export default ItemList