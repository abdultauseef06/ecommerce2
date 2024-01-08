import styled from "styled-components";
import { useCartContext } from "../context/cartcontext";
import Cartitem from "./Cartitem";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import FormatPrice from "../Helpers/FormatPrice";


const Cart = () => {
  const { cart, clearCart,totalAmount,shippingFee } = useCartContext();
  const navigate = useNavigate();


  if (cart.length > 0) {
     const Product_in_cart= cart.map(item => ({ id: item.id, color: item.color, name:item.name, image:item.image,totalAmount:item.amount,price: item.price}));
    console.log("cart",Product_in_cart);
    return (
      <Wrapper>
        <div className="container">
          <div className="cart_heading grid-five-column">
            <p>Item</p>
            <p className="cart-hide">Price</p>
            <p>Quantity</p>
            <p className="cart-hide">Subtotal</p>
            <p>Remove</p>
          </div>
          <hr />
          <div className="cart-content" style={{ display: "flex", flexDirection: "column" }}>
            {cart.map((curElem) => {
              return <Cartitem key={curElem.id} {...curElem} />;
            })}
          </div>
          <div className="button-container">
            <NavLink to="/Shop">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "300px", backgroundColor: "black", color: "greenyellow", borderColor: "greenyellow" }}
              >
                {cart.length === 0 ? "Shop Now" : "Continue Shopping"}
              </button>
            </NavLink>

            {cart.length > 0 && (
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "300px", backgroundColor: "black", color: "red", borderColor: "red" }}
                onClick={clearCart}
              >
                clearCart
              </button>
            )}
          </div>
        </div>
        <div className="order_totalamount">
        <div>
          <p style={{ marginTop: "15px", marginLeft: "10px" }}>
            SubTotal: <FormatPrice price={totalAmount} />
          </p>
          <p style={{ marginLeft: "10px" }}>
            Shipping Fee: <FormatPrice price={shippingFee} />
          </p>
          <hr />
          <p style={{ marginTop: "15px", marginLeft: "10px" }}>
            Total: <FormatPrice price={totalAmount + shippingFee} />
          </p>
          
          <button
            style={{ width: '100%', backgroundColor: 'green' }}
            onClick={() => {
              console.log('Product_in_cart before navigating:', Product_in_cart);
              navigate('/CheckOut', { state: { Product_in_cart } });
            }}
          >
          Check Out
        </button>

        </div>
      </div>
      </Wrapper>
    );
  } else {
    return (
      <>
      <Nav/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh',backgroundColor:"#111"}}>
        <p style={{ fontSize: '30px', textAlign: 'center' }}>Your cart is empty.</p>
        <p style={{ textAlign: 'center' }}>Shop items to add to the cart.</p>
        <NavLink to="/Shop">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "300px", backgroundColor: "black", color: "greenyellow", borderColor: "greenyellow" }}
              >
                Shop Now
              </button>
            </NavLink>
      </div>
  
      </>
    );
  }

  
};

const Wrapper = styled.section`
  .container {
    width: 100%;
    margin: 50px auto 200px auto;
    padding: 2rem;
    background-color:#111;

  }

  .cart_heading {
    font-weight: bold;
    margin: 0;
  }

  .order_totalamount{
    border:1px solid red;
    width:265px;
    height:200px;
    margin-left:990px;
    margin-top:-150px;
    margin-bottom:100px;
    background-color:#111;
  }
  .button-container{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .grid-five-column {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }

  .cart-content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
  }

  .cart-content > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 0; /* Reduce the right margin */
  }

  .cart-hide {
    display: block; /* Display by default */
  }

  @media (max-width: 767px) {
    .cart-hide {
      display: none; /* Hide on mobile devices */
    }

    .cart-content {
      grid-template-columns: repeat(1, 1fr); /* Switch to one column on mobile */
    }

    .cart-content > div {
      justify-content: space-around; /* Adjust as needed */
    }
  }
`;

export default Cart ;