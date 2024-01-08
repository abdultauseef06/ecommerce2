import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const ListView = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <Wrapper className='section'>
        <p>No products to display</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper className='section'>
      <List className='List'>
        {products.map((curElem) => (
          <ListItem key={curElem.id}>
            <Product {...curElem}></Product>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  background-color: black;
  padding: 20px ;
  max-width:650px;
  margin:0 300px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
`;




export default ListView;
