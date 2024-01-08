import React from 'react';
import styled from 'styled-components';
import { BiSolidPlaneAlt, BiShieldQuarter } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import { GrSecure } from 'react-icons/gr';

const Wrapper = styled.div`
  .container-wrapper {
    display: flex;
    flex-direction: column; /* Change to column for smaller screens */
    justify-content: space-between;
    background-color: #1c1c1c;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .services-1,
  .services-2,
  .services-3 {
    flex: 1;
    padding: 10px;
    margin: 10px;
    background-color: #e8e8e8;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 15px;
    max-height: 200px;
    overflow: auto;
    width: 100%; /* Adjust width for smaller screens */
  }

  .services-2 .box {
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 10px;
    background-color: #e8e8e8;
    border: 1px solid #ccc;
  }

  .icon {
    font-size: 30px;
    margin-bottom: 5px;
  }

  .icon-1 {
    font-size: 30px;
    margin-top: 50px;
  }

  /* Media Query for smaller screens */
  @media (min-width: 768px) {
    .container-wrapper {
      flex-direction: row; /* Switch back to row for larger screens */
    }

    .services-1,
    .services-2,
    .services-3 {
      width: 200px; /* Adjust width for larger screens */
    }
  }
`;

function Services() {
  return (
    <Wrapper>
      <div className="container-wrapper">
        <div className="services-1">
          <div className="icon-1">
            <BiSolidPlaneAlt />
          </div>
          <h4>Super Fast and Free Delivery</h4>
        </div>
        <div className="services-2">
          <div className="box">
            <div className="icon">
              <BiShieldQuarter />
            </div>
            <h4>NON Contact Shipping</h4>
          </div>
          <div className="box">
            <div className="icon">
              <GiReceiveMoney />
            </div>
            <h4>Money Back Guarantee</h4>
          </div>
        </div>
        <div className="services-3">
          <div className="icon-1">
            <GrSecure />
          </div>
          <h4>100% Secure Payment</h4>
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;
