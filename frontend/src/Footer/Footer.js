import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black p-4 row '>
        <div className='col-3 ' >
        <img  className='rounded-pill' src='https://media.licdn.com/dms/image/D4D0BAQHp7S4VRmVDjQ/company-logo_200_200/0/1681930817507?e=1720656000&v=beta&t=I7tGzwOsM3NSllML0jNbG-4IP-pGeh_MLM-23mwORcA' alt="Company Logo" width="150px" height="90px"/>
        </div>
       <div className='text-white col-3'>
       <p>Copyright © Ksham Innovation 2023.</p>
        <p>All Rights Reserved.</p>
       </div>
       <div className='col-5 text-white'>
        <NavLink className="fs-2 text-white">Privacy Policy</NavLink><span className='fs-2 '>. | </span>
        <NavLink className="fs-2 text-white"> Trademark</NavLink><span className='fs-2 '>. | </span>
        <NavLink className="fs-2 text-white"> Patent</NavLink>
       </div>
       <div className='col-1 fs-1 text-white '>
       <i className="ri-linkedin-box-fill"></i>
       <i className="ri-instagram-line"></i>
       </div>
    </div>
  )
}

export default Footer