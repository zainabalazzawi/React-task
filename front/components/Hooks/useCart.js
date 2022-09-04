import React, { useEffect, useState } from "react";

const useCart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToList = (book) => {
    const selectedBooks = shoppingCart.find((item) => item.id === book.id);
    setShoppingCart(...selectedBooks, book);
  };

  return { shoppingCart, addToList };
};

export default useCart;
