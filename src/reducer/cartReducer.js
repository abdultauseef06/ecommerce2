

const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const { id, color, amount, product } = action.payload;
    let existingProduct = state.cart.find((curItem) => curItem.id === id + color);

    if (existingProduct) {
      let updatedCart = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newamount = curElem.amount + amount;
          if (newamount >= curElem.max) {
            newamount = curElem.max;
          }
          return {
            ...curElem,
            amount: newamount,
          };
        } else {
          return curElem;
        }
      });

      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      const cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
        
      };

      let updatedCart = state.cart.map((curElem) =>
        curElem.id === cartProduct.id ? { ...curElem, amount: curElem.amount + amount } : curElem
      );

      if (!updatedCart.some((item) => item.id === cartProduct.id)) {
        updatedCart = [...updatedCart, cartProduct];
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }
  }

  if (action.type === "SET_DECREMENT") {
    let updatedamount = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decamount = curElem.amount - 1;
          if(decamount<=1){
            decamount = 1;
          }
        return {
          ...curElem,
          amount: decamount,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedamount,
    };
  }


  if (action.type === "SET_INCREMENT") {
    let updatedamount = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incamount = curElem.amount + 1;
          if(incamount>=curElem.max){
            incamount = curElem.max;
          }
        return {
          ...curElem,
          amount: incamount,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedamount,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let totalAmount = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;
      return initialVal + price * amount; // Add return statement here
    }, 0);
  
    return {
      ...state,
      totalAmount: totalAmount,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload);

    return {
      ...state,
      cart: updatedCart,
    };
  }

  // Handle other action types if needed
  return state;
};

export default cartReducer;
