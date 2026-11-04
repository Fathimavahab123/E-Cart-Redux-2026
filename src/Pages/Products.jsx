import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className='m-5'>
       <div className='row pt-5'>
          {/*Duplicate column according to products*/ }
          <div className='col-3'>
            {/*cards*/}
            <Card >
      <Card.Img style={{height:"250px"}} variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/032/260/701/small_2x/a-bottle-of-perfume-sitting-on-a-table-ai-generated-free-photo.jpg" />
      <Card.Body className='text-center'>
        <Card.Title>PERFUME</Card.Title>
        <Link to={`/products/:id`} className='btn btn-primary'>View More</Link>
      </Card.Body>
    </Card>


          </div>
        </div>
      </div>
  )
}

export default Products
