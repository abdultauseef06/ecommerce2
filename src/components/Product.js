import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../Helpers/FormatPrice';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
  background-color: #fff;
  transition: transform 0.3s;
  height: 350px; /* Set a fixed height for the card */
  overflow: hidden; /* Hide overflow content */
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  flex-grow: 1; /* Let the image grow to fill the available space */
`;

const Caption = styled.div`
  font-size: 16px;
  margin: 10px 0;
  color: #555;
`;

const CardDataFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const H3 = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const CardDataPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Product = ({ id, name, image, price, category }) => {
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <Card>
        <CardContent>
          <figure>
            <CardImage src={image[0].url} alt={name} />
            <Caption>{category}</Caption>
          </figure>
          <CardDataFlex>
            <H3>{name}</H3>
            <CardDataPrice>{<FormatPrice price={price}/>}</CardDataPrice>
          </CardDataFlex>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default Product;
