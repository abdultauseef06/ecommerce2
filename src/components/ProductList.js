import React from 'react'
import {useFilterContext} from "../context/Filtercontext"
import Gridview from './Grid_view';
import ListView from './ListView';

const ProductList = () => {
  const {filter_products,grid_view}= useFilterContext();

  if(grid_view===true){
    return<Gridview products={filter_products}/>
  }
  if(grid_view===false){
    return<ListView products={filter_products}/>}

}

export default ProductList
