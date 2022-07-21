import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './Loading.css'

function Loading() {
  return (
    <div className='bodySpiner'>
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
        <Spinner animation="grow"/>
    </div>
  )
}

export default Loading