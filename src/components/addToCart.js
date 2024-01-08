import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartcontext";
import CartAmountToggle from "./Cartammounttoggle"; // Adjust the import statement

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext(); // Call the hook to get the context value
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const [btntxt, setbtntxt] = useState("Add To Cart");
  const [secondbutton, setsecondbutton] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);


  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <div className="colors">
      <p>
        Color:
        {colors.map((curColor, index) => (
          <button
            key={index}
            style={{
              backgroundColor: curColor,
              padding: '5px 5px 5px 5px',
              borderRadius: "90%",
              height: "20px",
              width: "20px",
              border: `${
                color.includes(curColor) ? '3px' : '1px'
              } solid ${color.includes(curColor) ? 'grey' : 'white'}`,
              marginLeft: "8px",
              textDecoration: color.includes(curColor)
                ? "underline"
                : "none",
            }}
            onClick={() => setColor(curColor)}
          >
            {color.includes(curColor) ? "" : null}
          </button>
        ))}
      </p>
      <hr />
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <button
        style={{
          width: "150px",
          maxHeight: "50px",
          textAlign: "center",
          color: isButtonClicked ? "grey" : "greenyellow", // Change text color when clicked
          backgroundColor: isButtonClicked ? "#111" : "black",
          borderColor: isButtonClicked ? "#111" : "greenyellow", // Change border color when clicked
        }}
        onClick={() => {
          addToCart(id, color, amount, product);
          setbtntxt("Added to Cart!");
          setsecondbutton(true);
          setIsButtonDisabled(true);
          setIsButtonClicked(true); // Set the button as clicked
        }}
        disabled={isButtonDisabled}
      >
        {btntxt}
      </button>
      <NavLink to="/Cart">
        {secondbutton && (
          <button
           type="button" className="btn btn-primary" 
           style={{
            width: "auto",
            maxHeight: "50px",
            textAlign: "start",
            color: "greenyellow",
            marginLeft: "10px",
            backgroundColor: "black",
            borderColor: "greenyellow",
          }}>
            Go To Cart
          </button>
        )}
      </NavLink>
    </div>
  );
};

export default AddToCart;
