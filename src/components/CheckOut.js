import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../store/auth';
import { useState, useEffect} from 'react';
import FormatPrice from '../Helpers/FormatPrice';

const CheckOut = () => {
  const location = useLocation();
  const { Product_in_cart } = location.state || [];
  console.log("checkout",Product_in_cart);
  const { user } = useAuth();
  console.log(user.phone);
  const [AddingAdress, setAddingAdress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const SelectionBox = () => {
    // State to hold the selected value
    const [selectedValue, setSelectedValue] = useState('');

    // Handler function to update the selected value
    const handleSelectionChange = (event) => {
      const selectedValue = event.target.value;
      
      const selectedAddress = user?.addresses.find((address) => address._id === selectedValue);

      setSelectedValue(selectedValue);
      setSelectedAddress(selectedAddress);
      setSelectedValue(selectedValue);
    
      console.log("address value", selectedValue);
      console.log("address", selectedAddress);

    };

    return (
      <SelectionBoxContainer>
      <label htmlFor="selectionBox">Select an adress:</label>
      <select id="selectionBox" value={selectedValue} onChange={handleSelectionChange}>
        <option value="">Select an address</option>
        {user?.addresses?.map((address, index) => (
          <option key={index} value={address._id}>
            {`${address.FlatNo}, ${address.street}, ${address.city}, ${address.state}, ${address.zipCode}, ${address.country}`}
          </option>
        ))}
      </select>
    </SelectionBoxContainer>
    );
  };



  

  const handleAddnewAdress = () => {
    setAddingAdress(true);


    
  };


  

  const [address, setAddress] = useState({
    FlatNo: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
  
    const payload = {
      email: user.email,
      address,
    };
  
    try {
      const response = await fetch('https://ecommerce-server-blue.vercel.app/api/address/add-Address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      console.log(response);
  
      if (response.ok) {
        console.log('Data sent successfully');
        alert('Address added successfully');
        setAddingAdress(false);
      } else {
        console.error('Failed to send data to the backend');
      }
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };
  

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch(`https://ecommerce-server-blue.vercel.app/api/address/get-Adress/${user.email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.error('Failed to fetch addresses from the server');
        }
      } catch (error) {
        console.error('Error fetching addresses from the server:', error);
      }
    };

    fetchAddresses();
  }, [user]); // Re-fetch addresses when the user state changes


  const handlenewOrder = async (e) => {
    e.preventDefault();
  
    let products = Product_in_cart.map((item) => {
      console.log('Mapping item:', item);
      return {
        productName: item.name,
        productId: item.id,
        color: item.color, 
        quantity: item.totalAmount,
        price: item.price,
        image:item.image,
      };
    });

    console.log('proo', products);


  
    const orderData = {
      username:user.username,
      phone:user.phone,
      email: user.email,
      addresses:selectedAddress,
      products,
      amount: calculateTotal(Product_in_cart),
    };
    console.log(orderData.amount);
    console.log(orderData.phone);

    try{
      const respone = await fetch('https://ecommerce-server-blue.vercel.app/api/orders/orders',{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(orderData)
        
      })
      if (respone.ok){
        alert("order placed succesfully");
        setTimeout(() => {
          navigate('/');
        }, 200);
      }
    }
    catch(error){
      console.log(error);
    }
  };
  



  

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <h2>Checkout</h2>
      </CheckoutHeader>
      <CheckoutContent>
        <OrderSummary>
          <h3>Order Summary</h3>
          <ul>
            {Product_in_cart.map((item) => (
              <CartItem key={item.id}>
                <ProductImage src={item.image} alt={item.name} />
                <div>
                  <ProductName>{item.name}</ProductName>
                  <p>
                    x<QuantityDisplay>{item.totalAmount}</QuantityDisplay>
                  </p>
                  <p>Total: <FormatPrice price={item.price * item.totalAmount} /></p>
                </div>
              </CartItem>
            ))}
          </ul>
        </OrderSummary>
        <PaymentDetails>
          <h3>Payment Details</h3>
          {/* Add payment form or other payment details here */}
        </PaymentDetails>
      </CheckoutContent>
      <OrderTotal>
        <h3>Order Total</h3>
        <p>Subtotal: <FormatPrice price={calculateSubtotal(Product_in_cart)} /></p>
        <p>Shipping Fee: <FormatPrice price={calculateShippingFee()} /></p>
        <hr />
        <p>Total: <FormatPrice price={calculateTotal(Product_in_cart)} /></p>
      </OrderTotal>

      
        <SelectionBox />


      {AddingAdress && (
        <AddressForm onSubmit={handleFormSubmit}>
          <InputLabel>Flat No:</InputLabel>
          <InputField type="text" name="FlatNo" value={address.FlatNo} onChange={handleAddressChange} />

          <InputLabel>Street:</InputLabel>
          <InputField type="text" name="street" value={address.street} onChange={handleAddressChange} />

          <InputLabel>City:</InputLabel>
          <InputField type="text" name="city" value={address.city} onChange={handleAddressChange} />

          <InputLabel>State:</InputLabel>
          <InputField type="text" name="state" value={address.state} onChange={handleAddressChange} />

          <InputLabel>Zip Code:</InputLabel>
          <InputField type="text" name="zipCode" value={address.zipCode} onChange={handleAddressChange} />

          <InputLabel>Country:</InputLabel>
          <InputField type="text" name="country" value={address.country} onChange={handleAddressChange} />

          <SubmitButton type="submit">Submit</SubmitButton>
        </AddressForm>
      )}

      <CheckoutButton onClick={handleAddnewAdress}>
        <button type="button">Add New Address</button>
      </CheckoutButton>

      <CheckoutButton onClick={handlenewOrder}>
        <button type="button">Place Order</button>
      </CheckoutButton>
         <NavLink to="/Shop">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "300px", backgroundColor: "black", color: "greenyellow", borderColor: "greenyellow" }}
              >
                Shop Now
              </button>
            </NavLink>
    </CheckoutContainer>
  );
};

// Helper functions to calculate subtotal, shipping fee, and total
const calculateSubtotal = (cart) => cart.reduce((total, item) => total + item.price * item.totalAmount, 0);
const calculateShippingFee = () => 50000; // Replace with your actual shipping fee logic
const calculateTotal = (cart) => calculateSubtotal(cart) + calculateShippingFee();

// Styled components for the checkout page
const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CheckoutHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h2 {
    color: #4caf50;
  }
`;

const SelectionBoxContainer = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  select {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  padding: 12px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 100px;
  margin-left: 220px;
`;

const AddressForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: -5px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 3px;
  font-weight: bold;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: -300px;
  box-sizing: border-box;
`;

const CheckoutContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const OrderSummary = styled.div`
  flex: 1;
  padding-right: 20px;

  h3 {
    margin-bottom: 10px;
    color: #4caf50;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const QuantityDisplay = styled.span`
  background-color: black;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  margin-left: 8px;
`;

const CartItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 12px;
`;

const ProductName = styled.div`
  font-weight: bold;
`;

const PaymentDetails = styled.div`
  flex: 1;

  h3 {
    margin-bottom: 10px;
    color: #4caf50;
  }
`;

const OrderTotal = styled.div`
  text-align: right;
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
    color: #4caf50;
  }

  p {
    margin: 5px 0;
  }

  hr {
    border: 0.5px solid #ddd;
    margin: 10px 0;
  }
`;

const CheckoutButton = styled.div`
  text-align: center;
  margin-top: 20px;

  button {
    padding: 12px 24px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export default CheckOut;
