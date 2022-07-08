import React from 'react'
import { Container } from 'react-bootstrap'
//import {useEffect,useState} from 'react';
import Items from '../item/Items';

function ItemList({producto}) {
  return (
    
    <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
      {producto.map((element) => (
        <Items productos={element} key={element.id} />
      ))}
    </Container>

  )
}

export default ItemList