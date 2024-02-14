import React from 'react'
import data_product from '../assets/data'
import './RelatedProducts.css'
import Item from '../Item/Item'


const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr className='relatedproducts-hr'/>
        <div className="relatedproducts-items">
            {data_product.map((item,i)=>{
                return <Item Key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}
        </div>
    </div>
  )
}

export default RelatedProduct
