import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled,{keyframes} from 'styled-components';
import Footer from './Footer';
import { useAuth } from '../store/auth';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff; /* Alice Blue */
`;


const fadeIn = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const WelcomeText = styled.div`
  h1 {
    text-align: center;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    animation: ${fadeIn} 2s steps(20, end);
    margin-right:115px;
    margin-top:-200px;
  }
`;

const LoginFormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
`;

const SignUpLink = styled.div`
  text-align: center;
  color: #333;
  margin-top: 15px;

  a {
    color: #4caf50;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;



const ErrorText = styled.div`
  color: red;
  margin-bottom: 10px;
  text-align: center;
`;

const SuccessText = styled.div`
  color: green;
  margin-bottom: 10px;
  text-align: center;
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://ecommerce-server-blue.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess('Login Successful');
        console.log("sucess:",data);
        storetokenInLS(data.token);
        setTimeout(() => {
          navigate('/');
        }, 200);
      }else {
        if (data.message) {
          setError(data.message); // Display specific error message received from the backend
        } else {
          setError('An error occurred. Please try again.'); // Fallback error message
        }
      }
    
    } catch (error) {
      console.log(error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <LoginWrapper>
      <WelcomeText>
        <h3>Welcome to Yubi Apparels!</h3>
        <h6>Enjoy your shopping experience.</h6>
        <h6>
          We appreciate you choosing our brand for your clothing needs. <br />
          Explore our collection of high-quality, stylish clothes designed to make you look and feel your best.<br />
          Thank you for being a part of the Yubi community!
        </h6>
      </WelcomeText>
        <LoginFormContainer>
          <FormTitle>Login</FormTitle>
          {error && <ErrorText>{error}</ErrorText>}
          {success && <SuccessText>{success}</SuccessText>}
          <form onSubmit={handleFormSubmit}>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <FormLabel htmlFor="password">Password:</FormLabel>
            <FormInput
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <SubmitButton type="submit">Login</SubmitButton>
          </form>
          <SignUpLink>
            Don't have an account? <NavLink to="/register">Sign Up</NavLink>
          </SignUpLink>
        </LoginFormContainer>
      </LoginWrapper>
      <Footer style={{ marginTop: '-40px' }} />
    </>
  );
};

export default Login;
