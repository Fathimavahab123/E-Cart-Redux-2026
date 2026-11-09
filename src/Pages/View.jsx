import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


function View() {

const {id} = useParams()
console.log(id);
const {allProducts}=useSelector(state=>state.productReducer)
console.log(allProducts);



  return (
   <>
      <Header/>
      <div className='container my-5 pt-5'>
        <div style={{height:"110vh"}} className='row align-items-center'>
         <div className='col-lg-6 text-center'>
           <img className='img-fluid' src="https://static.vecteezy.com/system/resources/previews/066/708/706/non_2x/black-mascara-on-transparent-background-free-png.png" alt="Product" />
           <div className='d-flex justify-content-evenly mt-5'>
            <button className='btn btn-info'>ADD TO WISHLIST</button>
            <button className='btn btn-success'>ADD TO CART</button>
           </div>
         </div>
         <div className='col-lg-6'>
           <h3 className='fw-bold'>Title</h3>
           <h2 className='fw-bold'>$ 30</h2>
           <h4 className='fw-bold'>Brand :</h4>
           <h4 className='fw-bold'>Category :</h4>
           <h4 className='fw-bold'>Description :</h4>
           <h5 className='fw-bold'>Client Reviews</h5>
           <div className='border rounded p-2 shadow my-5'>
             <p><span className='fw-bolder'>Name : </span>Message</p>
             <p>Rating : 5 <FontAwesomeIcon icon={faStar} className='text-warning'/></p>
           </div>
         </div>
        </div>
      </div>
   </>
  )
}

export default View
