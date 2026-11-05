import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';


function Wishlist() {
  return (
    <div className='container my-5'>
      <h1 className='pt-5 text-primary fw-bold'>User's Wishlist</h1>
          <div className='row pt-5'>
          {/*Duplicate column according to products*/ }
          <div className='col-3'>
            {/*cards*/}
            <Card >
      <Card.Img style={{height:"250px"}} variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/032/260/701/small_2x/a-bottle-of-perfume-sitting-on-a-table-ai-generated-free-photo.jpg" />
      <Card.Body className='text-center'>
        <Card.Title>PERFUME</Card.Title>
        <div className='d-flex justify-content-evenly'>
          <button className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
          <button className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus}/></button>
          </div>
      </Card.Body>
    </Card>
         </div>
        </div>
    </div>
  )
}

export default Wishlist
