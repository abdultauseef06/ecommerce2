import React from 'react';
import { MdGroups } from 'react-icons/md';

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
    </div>
  );
}

const Trusted = () => {
  return (
    <Wrapper>
      <div className="card" style={{ height: '100px', backgroundColor: '#1c1c1c' }}>
        <div className="card-body" style={{ padding: '5px', margin: '5px' }}>
          <blockquote className="blockquote mb-0" style={{ padding: '0', margin: '0' }}>
            <div className='trusted' style={{ textAlign: "center", marginTop: '5px', color: "white" }}> Trusted by Millions of People.</div>
            <div className='people' style={{ textAlign: "center", fontSize: "40px", marginBottom: '40px', color: "white" }}> <MdGroups /></div>
          </blockquote>
        </div>
      </div>
    </Wrapper>
  );
}

// Add responsive styles directly in JSX using media queries
const responsiveStyles = `
  @media (max-width: 768px) {
    .card {
      height: auto;
    }

    .card-body {
      padding: 10px;
      margin: 10px;
    }

    .people {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }
`;

// Create a style tag and append it to the document head
const styleTag = document.createElement('style');
styleTag.type = 'text/css';
styleTag.appendChild(document.createTextNode(responsiveStyles));
document.head.appendChild(styleTag);

export default Trusted;
