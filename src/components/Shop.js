import React from 'react';
import Sort from './Sort';
import ProductList from './ProductList';
import FilterSection from './FilterSection';
import Nav from './Nav';
import Footer from './Footer';
import Services from './Services';


const Shop = () => {
  return (
    <>
    <Nav/>
    <FilterSection/>
      <div className="container grid grid-filter-column">
        <section className="product-view-Sort">
          <div className="sort-filter">
           <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    
    <Services/>
    <Footer/>
    </>
  );
};




export default Shop;
