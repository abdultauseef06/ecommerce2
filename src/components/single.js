import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import styled from 'styled-components';
import FormatPrice from '../Helpers/FormatPrice';
import { useProductContext } from '../context/Productcontext';
import MyImage from './MyImage';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import AddToCart from './addToCart';
import Star from './Star';

//const API = "https://api.pujakaitem.com/api/products";
const API = "http://localhost:5000/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, SingleProduct } = useProductContext();
  const { _id } = useParams();

  useEffect(() => {
    //getSingleProduct(`${API}/${id}`);
    getSingleProduct(`${API}/${_id}`);

  }, [_id,getSingleProduct]);

  const {
    name,
    company,
    price,
    description,
    image,
    reviews,
    stars,
    stock,
  } = SingleProduct || {};

  return (
    <>
      <Nav />
      <Wrapper>
        <div className="container">
          <div className="grid grid-two-column">
            {/* Left column (empty) */}
            <div className="empty-column">
              <MyImage imgs={image} />
            </div>

            {/* Right column */}
            <div className="product-content">
              <div className="product-data">
                <h2>{name}</h2>
                <Star stars={stars} reviews={reviews} />
                <PriceWrapper>
                  <p className="product-data-price">
                    MRP:
                    <del>
                      <FormatPrice price={price + 250000} />
                    </del>
                  </p>
                  <p className="product-data-price product-data-real">
                    Deal of the Day: <FormatPrice price={price} />
                  </p>
                </PriceWrapper>
                <p>{description}</p>
                <Warranties>
                  <Warranty>
                    <TbTruckDelivery />
                    <p>Free Delivery</p>
                  </Warranty>
                  <Warranty>
                    <TbReplace />
                    <p>30 Day Replacement</p>
                  </Warranty>
                  <Warranty>
                    <MdSecurity />
                    <p>Secure Delivery</p>
                  </Warranty>
                </Warranties>
                <hr />
                <ProductInfo>
                  <p>
                    Available: <span>{stock > 0 ? 'In stock' : 'Not Available'}</span>
                  </p>
                  <p>
                    ID: <span>{_id}</span>
                  </p>
                  <p>
                    Brand: <span>{company}</span>
                  </p>
                </ProductInfo>
                {stock > 0 && <AddToCart product={SingleProduct} />}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.section`
  .container {
    width: 1100px;
    margin: auto auto 200px auto;
    padding: 15rem 2rem;
    border: 1px solid black;
    height: 750px;
    background-color: #111;
  }

  .grid-two-column {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 500px;
  }

  .empty-column {
    border: 1px solid skyblue;
    width: 550px;
    margin-top: -150px;
    height: 470px;
  }

  .product-content {
    display: flex;
    justify-content: space-between;
    margin-top: -200px;
    margin-left: 20px;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Warranties = styled.div`
  display: flex;
  flex: 1;
`;

const Warranty = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const ProductInfo = styled.div`
  margin-top: 20px;
`;

export default SingleProduct;
