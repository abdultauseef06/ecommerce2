import React, { useState } from 'react';

const AddressPage = () => {
  const [address, setAddress] = useState({
    state: '',
    city: '',
    area: '',
    street: '',
    buildingName: '',
    aptName: '',
    landmark: '',
    pincode: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the address data (e.g., send it to a server or store it in state)
    console.log('Address submitted:', address);
    // You can add logic here to send the address to the server or store it in state
  };

  return (




    <div
      style={{
        maxWidth: '500px',
        margin: 'auto',
        marginTop:"45px",
        marginRight:"90px",
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, #B0C4DE 0%, #E0E8F0 100%)',
        transition: 'background 0.5s ease',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#333',
          fontFamily: 'Arial, sans-serif',
          fontSize: '28px',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
        }}
      >
        Enter Your Address
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <label style={{ width: '48%', marginBottom: '15px' }}>
          State:
          <input
            type="text"
            value={address.state}
            onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, state: e.target.value }))}
            style={{
              width: '100%',
              padding: '12px',
              boxSizing: 'border-box',
              borderRadius: '6px',
              border: 'none',
              marginBottom: '10px',
              background: 'rgba(255, 255, 255, 0.8)',
              color: '#333',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease, transform 0.2s ease',
            }}
          />
        </label>
        <label style={{ width: '48%', marginBottom: '15px' }}>
          City:
          <input
            type="text"
            value={address.city}
            onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, city: e.target.value }))}
            style={{
              width: '100%',
              padding: '12px',
              boxSizing: 'border-box',
              borderRadius: '6px',
              border: 'none',
              marginBottom: '10px',
              background: 'rgba(255, 255, 255, 0.8)',
              color: '#333',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease, transform 0.2s ease',
            }}
          />
        </label>
        <label style={{ width: '100%', marginBottom: '15px' }}>
          Area:
          <input
            type="text"
            value={address.area}
            onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, area: e.target.value }))}
            style={{
              width: '100%',
              padding: '12px',
              boxSizing: 'border-box',
              borderRadius: '6px',
              border: 'none',
              marginBottom: '10px',
              background: 'rgba(255, 255, 255, 0.8)',
              color: '#333',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease, transform 0.2s ease',
            }}
          />
        </label>

        <label style={{ width: '100%', marginBottom: '15px' }}>
          Street:
          <input
            type="text"
            value={address.street}
            onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, street: e.target.value }))}
            style={{
              width: '100%',
              padding: '12px',
              boxSizing: 'border-box',
              borderRadius: '6px',
              border: 'none',
              marginBottom: '10px',
              background: 'rgba(255, 255, 255, 0.8)',
              color: '#333',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease, transform 0.2s ease',
            }}
          />
        </label>
        <label style={{ width: '100%', marginBottom: '15px' }}>
          Building Name or Apt Name:
          <input
            type="text"
            value={address.buildingName}
            onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, buildingName: e.target.value }))}
            style={{
              width: '100%',
              padding: '12px',
              boxSizing: 'border-box',
              borderRadius: '6px',
              border: 'none',
              marginBottom: '10px',
              background: 'rgba(255, 255, 255, 0.8)',
              color: '#333',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease, transform 0.2s ease',
            }}
          />
        </label>
        <label style={{ width: '48%', marginBottom: '15px' }}>
          Landmark:
          <input
            type="text"
            value={address.landmark}
            onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, landmark: e.target.value }))}
            style={{
              width: '100%',
              padding: '12px',
              boxSizing: 'border-box',
              borderRadius: '6px',
              border: 'none',
              marginBottom: '10px',
              background: 'rgba(255, 255, 255, 0.8)',
              color: '#333',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease, transform 0.2s ease',
            }}
          />
        </label>
        <label style={{ width: '48%', marginBottom: '15px' }}>
          Pincode:
          <input
            type="text"
            value={address.pincode}
            onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, pincode: e.target.value }))}
            style={{
              width: '100%',
              padding: '12px',
              boxSizing: 'border-box',
              borderRadius: '6px',
              border: 'none',
              marginBottom: '10px',
              background: 'rgba(255, 255, 255, 0.8)',
              color: '#333',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'background 0.3s ease, transform 0.2s ease',
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#6c5ce7',
            color: '#fff',
            padding: '14px',
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            boxShadow: '0 4px 6px rgba(108, 92, 231, 0.5)',
            transition: 'background 0.3s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Submit
        </button>
      </form>
    </div>

  );
};

export default AddressPage;
