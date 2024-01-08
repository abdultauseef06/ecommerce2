import React from 'react';
import { useProductContext } from '../context/Productcontext';
import styled from 'styled-components';
import Product from './Product';

const FeatureProducts = () => {
  const { isLoading, FeaturedProducts } = useProductContext();

  if (isLoading) {
    return <div>...Loading</div>;
  }


  return (
    <Wrapper className="section">
      <Container>
        <IntroData>Check Now!</IntroData>
        <CommonHeading>Our feature products</CommonHeading>
        <Grid>
        {FeaturedProducts && FeaturedProducts.map((curElem) => {
        return <Product key={curElem.id} {...curElem} />
        })}
        </Grid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const IntroData = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CommonHeading = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export default FeatureProducts;
