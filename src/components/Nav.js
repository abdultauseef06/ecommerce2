import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { useCartContext } from "../context/cartcontext";
import { useAuth } from '../store/auth';


const NavbarWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start !important;
  background-color: #111;
  color: white;
  height: 50px;
  margin: 0;
`;

const LeftItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: white;
  font-weight: 700;
  margin-right: 40px;
  transition: transform 0.25s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #9ACD32;
    transform: scaleX(0);
    transition: transform 0.25s;
  }

  &::before {
    top: -3px;
    transform-origin: left;
  }

  &::after {
    bottom: -3px;
    transform-origin: right;
  }

  &:hover::before,
  &:hover::after {
    transform: scaleX(1);
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
`;

const RightItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* Pushes the content to the right */
`;

const Nav = () => {
  const {isLoggedIn} = useAuth();



  const { cart } = useCartContext();
  return (
    <NavbarWrapper style={{fontSize: '20px' }}>
      <LeftItemsWrapper>
        <li>
          <StyledNavLink to="/" className="link" style={{marginLeft:"60px" }} >
            Yubi Apparels
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/" className="link">
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Shop" className="link">
            Shop
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Contact" className="link">
            Contact
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/About" className="link">
            About
          </StyledNavLink>
        </li>
      </LeftItemsWrapper>

      <RightItemsWrapper>
        <NavLink to="/Cart">
        <IconButton>
        <HiMiniShoppingBag style={{ color: 'white', marginRight: '30px', fontSize: '30px' }} />
          {cart.length > 0 && (
            <span
              style={{
                position: 'relative',
                top: '-7px',   // Adjust the top value to move it up
                marginRight: 'auto',// Adjust the margin as needed
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '4px',
                fontSize: '10px',
              }}
            >
              {cart.length}
            </span>
          )}


    </IconButton>
        </NavLink>
        {isLoggedIn ? (
          <NavLink to="/Profile" activeclassname="activeClassName">
            <IconButton>
              <CgProfile
                style={{
                  color: 'greenyellow',
                  marginRight: '15px',
                  fontSize: '30px',
                }}
              />
            </IconButton>
          </NavLink>
        ):(
          <>
            <NavLink to="/login" activeclassname="activeClassName">
              <button
                className="btn"
                type="button"
                style={{
                  color: 'greenyellow',
                  borderColor: 'greenyellow',
                  marginRight: '15px',
                  backgroundColor: 'black',
                  padding: '10px',
                  fontSize: '15px',
                  width: '75px',
                  height: 'auto',
                }}
              >
                Login
              </button>
            </NavLink>
          </>
        )}


      </RightItemsWrapper>
    </NavbarWrapper>
  );
};

export default Nav;
