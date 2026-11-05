import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';



function Footer() {
  return (
    <div className='container-fluid bg-primary text-light p-5'>
   <div className="row">
   <div className='col-lg-4'>
    <div className="d-flex align-items-center gap-2 mb-4">
            <h4 className="mb-0"> <FontAwesomeIcon icon={faTruckFast} className='me-2'/>DailyCart</h4>
          </div>
    <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
    <p>Code licensed Luminar.docs CC BY 3.0.</p>
    <p>Currently v5.3.2</p>
   </div>
   <div className='col-lg-2'>
    <h4 className='mb-4'>Links</h4>
    <p className='mb-0'>Home</p>
    <p className='mb-0'>Wishlist</p>
    <p className='mb-0'>Cart</p>
   </div>
   <div className='col-lg-3'>
    <h4 className='mb-4'>Guides</h4>
    <p className='mb-0'>React</p>
    <p className='mb-0'>React Bootstrap</p>
    <p>React Router</p>
   </div>
   <div className='col-lg-3'>
    <h4 className='mb-4'>Contact Us</h4>
    <div className='d-flex w-75 mb-3'>
      <input type="email" placeholder='Email Here' className='form-control rounded' style={{ backgroundColor: 'white' }}/>
      <span className='ms-2'>→</span>
    </div>
    <div className='d-flex gap-2'>
      <FaFacebook />
      <FaTwitter />
      <FaWhatsapp />
      <FaInstagram />
      <MdEmail />
      <IoCall />
    </div>
   </div>
   </div>
   <h4 className='text-center mt-2'>Copyright &copy; August 2025 Batch,Daily Cart. Built with React Redux.</h4>
   </div>
    
  )
}

export default Footer
