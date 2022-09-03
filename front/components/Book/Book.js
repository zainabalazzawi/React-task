import React, { useEffect, useState } from "react";
import AddToCard from "../AddToCard/AddToCard";
const Book = ({ bookId, addBook }) => {
  const [book, setBook] = useState();
  useEffect(() => {
    // fetch book using the bookId
    // the results in the book state above using setBook
  });

  if (!book) return null;

  return (
    <div>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.pages}</div>
      <AddToCard />
    </div>
  );
};

export default Book;
