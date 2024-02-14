import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_Product}= useContext(ShopContext) ;
  const {productId} = useParams();
  const  Product = all_Product.find((e)=>e.id === Number(productId))

  if(!Product){
    return <div>Product not found with {productId}</div>
  }
  return (
    <div>
      <Breadcrum product= {Product}/>
      <ProductDisplay product={Product} />
      <DescriptionBox/>
      <RelatedProduct/>
      
    </div>
  )
}

export default Product
