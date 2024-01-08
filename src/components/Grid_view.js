import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const Gridview = ({ products }) => {
  console.log("products",products)
  if (!products || products.length === 0) {
    return (
      <Wrapper className='section'>
        <p>No products to display</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper className='section'>
      <Grid className='Grid'>
        {products.map((curElem) => (
          <ProductWrapper key={curElem.id}>
            <Product {...curElem}></Product>
          </ProductWrapper>
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: Black;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductWrapper = styled.div`
  align-self: start; /* Align content at the start */
`;

export default Gridview;
