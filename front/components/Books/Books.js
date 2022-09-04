import React from "react";
import Book from "../Book/Book";
import useFetch from "../Hooks/useFetch";

const Books = ({ addItem, removeItem, hasItem, addToCart }) => {
  const { data } = useFetch("http://localhost:3001/api/book?limit=100");
  return (
    <div>
      {data.map((book) => {
        return (
          <Book
            book={book}
            key={book.id}
            addItem={addItem}
            removeItem={removeItem}
            hasItem={hasItem}
          />
        );
      })}
    </div>
  );
};

export default Books;
