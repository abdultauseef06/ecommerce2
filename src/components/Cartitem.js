import React from 'react';
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from './Cartammounttoggle';
import { GoTrash } from "react-icons/go";
import  {NavLink}  from 'react-router-dom';
import {useCartContext} from "../context/cartcontext";



const Cartitem = ({ id, name, image, color, price, amount }) => {
  const{removeItem,setDecrease,setIncrease} =useCartContext();

   const getSingleProduct =()=>{
      console.log("image clicked")
  }
  return (
    <div className="cart_heading_grid_5_column">
      <div className="cart-image">
        <NavLink to={`/singleproduct/${id}`}>
        <figure>
          <img style={{ width: "50px", marginTop: "-85px" }} src={image} alt={id} onClick={getSingleProduct} />
        </figure>
        </NavLink>
      </div>
      <div className="cart-details">
        <div className="cart-name">
          <p style={{ marginLeft: "15px", fontSize: "15px",position: "relative",top: "-15px" }}>{name}</p>
          <div className="color-div">
            <p style={{ marginLeft: "15px", fontSize: "15px", marginBottom: "-5px", position: "relative",top: "-35px" }}>color:</p>
            <div
              className="color-style"
              style={{
                backgroundColor: color,
                padding: '3px', // Adjusted padding
                borderRadius: "50%",
                height: "15px",
                width: "15px",
                border: "1px solid white",
                marginLeft: "58px",
                position: "relative",
                top: "-47px",
              }}
            ></div>
          </div>
        </div>
        <div className="cart-price" style={{ marginLeft: "1000px" }}>
          <p style={{position: "relative",top: "-75px",left:"-850px"}}> 
            <FormatPrice price={price} />
          </p>
        </div>

      </div>
      <div className="cart-amount" style={{position: "relative",top: "-38px",left:"-690px"}}>
      <CartAmountToggle
        amount={amount}
        setDecrease={()=>setDecrease(id)}
        setIncrease={()=>setIncrease(id)}
      />
      </div>
      <div className="cart-hide" style={{position: "relative",top: "-38px",left:"-540px"}}>
        <p>
          <FormatPrice price={price * amount}/>
        </p>
      </div>
      <div className="div" style={{position: "relative",top: "-45px",left:"-370px"}}>
      <GoTrash onClick={()=>removeItem(id)}/>
      </div>
    </div>
    
  );
};

export default Cartitem;
