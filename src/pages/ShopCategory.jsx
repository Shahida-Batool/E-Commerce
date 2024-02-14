import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item/Item'



const ShopCategory = (props) => {
  const {all_Product}= useContext(ShopContext);

  const category = props.category;
  const filteredProducts = all_Product.filter(item=> item.category === category);


  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="Shopcategory-indexsort">
        <p>
          <span>Showing {filteredProducts.length} products</span>
        </p>
      <div className="ShopCategory-sort">
        sort by <img src={dropdown_icon} alt="" />
      </div>
    </div>
    <div className="shopcategory-products">
      {filteredProducts.map((item, i) =>
        (<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>)
      )}
    </div>
     <div className="shopcategory-loadmore">
      Explore More
     </div>
    </div>

  )
}

export default ShopCategory
