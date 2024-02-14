import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviws (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website ia an online platform that facilitates the  buying and selling of products or services over the internet server as a virtual marketplace.</p>
            <p>
                E-commerce website typically display product or services along with detailed description , images , prices and any avalaible variation (eg; size, colour).
            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
