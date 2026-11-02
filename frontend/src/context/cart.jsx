import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const existingCartItem = localStorage.getItem("cart");

    if (existingCartItem) {
      setCart(JSON.parse(existingCartItem));
    }
  }, []);

  // Add product to cart
  // const addToCart = (item, size) => {
  //   setCart((prevCart) => {
  //     const existingItem = prevCart.find(
  //       (cartItem) => cartItem._id === item._id
  //     );

  //     let updatedCart;

  //     if (existingItem) {
  //       // Increase quantity if product already exists
  //       updatedCart = prevCart.map((cartItem) =>
  //         cartItem._id === item._id
  //           ? {
  //               ...cartItem,
  //               quantity: (cartItem.quantity || 1) + 1,
  //             }
  //           : cartItem
  //       );
  //     } else {
  //       updatedCart = [
  //         ...prevCart,
  //         {
  //           ...item,
  //           quantity: 1,
  //         },
  //       ];
  //     }

  //     localStorage.setItem("cart", JSON.stringify(updatedCart));

  //     return updatedCart;
  //   });
  // };

  const currency = 'Rs. ';

  const addToCart = (item, size) => {
  if (!size) {
    toast.error("Please select a size");
    return;
  }

  setCart((prevCart) => {
    const existingItem = prevCart.find(
      (cartItem) => cartItem._id === item._id && cartItem.size === size
    );

    let updatedCart;

    if (existingItem) {
      // Increase quantity for the same product and size
      updatedCart = prevCart.map((cartItem) =>
        cartItem._id === item._id && cartItem.size === size
          ? {
              ...cartItem,
              quantity: (cartItem.quantity || 1) + 1,
            }
          : cartItem
      );
    } else {
      // Add product with its selected size
      updatedCart = [
        ...prevCart,
        {
          ...item,
          size,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return updatedCart;
  });
};

  return (
    <CartContext.Provider
      value={[
        cart,
        setCart,
        addToCart,
        currency
      ]}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
