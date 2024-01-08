import React, { useState } from 'react';
import styled from 'styled-components';

const MyImage = ({ imgs = [{ url: '' }] }) => {
const[mainImage,setMainImage]=useState(imgs[0])
  return (
    <Wrapper>
      <div className="grid-row">
        <div className="column">
          {imgs.map((curElem, index) => (
            <figure key={index}>
              <img
                src={curElem.url}
                alt={curElem.filename}
                className='Box-image-style'
                onClick={()=>setMainImage(curElem)}
                
              />
            </figure>
          ))}
        </div>
        <div className="main-screen">
          <img
            src={mainImage.url}
            alt={mainImage.filename}
            className='Main-image'
            
          />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  .column {
    display: flex;
    flex-direction: column;
  }

  .Box-image-style {
    max-width: 300px;
    max-height: 100px; /* Set a maximum height */
    border:1px solid skyblue;
  }

  .main-screen {
    max-width: 100%;
    max-height: 200px; /* Set a maximum height for the main image */
    margin-left:200px;
    margin-top:-350px;
  }

  .Main-image {
    width: 100%; /* Ensure the image takes up the full width */
    height: 100%; /* Ensure the image takes up the full height */
  }
`;

export default MyImage;
