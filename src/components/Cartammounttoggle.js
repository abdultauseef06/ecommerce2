import React from 'react';
import styled from 'styled-components';

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <Wrapper>
      <div className="amount-toggle">
        <button className="decrease-button" onClick={() => setDecrease()}>
          -
        </button>
        <p style={{ flex: 0 }}>{amount}</p>
        <button className="increase-button" onClick={() => setIncrease()}>
          +
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .amount-toggle {
    display: flex;
    align-items: center; /* Center items vertically within the container */
    margin-top: -15px;
  }

  .amount-toggle button {
    font-size: 30px; /* Adjust the font size as needed */
    cursor: pointer;
    margin: 0 5px; /* Add margin between buttons if needed */
    width: auto; /* Allow button width to be determined by content */
    padding: 0; /* Remove default button padding */
  }

  .decrease-button,
  .increase-button {
    background-color: #111; /* Adjust the background color as needed */
    color: #fff; /* Adjust the text color as needed */
    text-align: center;
    line-height: 30px; /* Set line-height equal to the button height for vertical centering */
    border: 1px solid #111;
  }

  .amount-toggle p {
    margin: 0 5px; /* Add margin between the text and buttons if needed */
  }
`;

export default CartAmountToggle;
