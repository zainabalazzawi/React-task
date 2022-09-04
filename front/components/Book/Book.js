import React, { useEffect, useState } from "react";
const Book = ({ book, addItem, removeItem, hasItem }) =>
  //{ bookId, addBook }
  {
    // const [book, setBook] = useState();
    // useEffect(() => {
    //    fetch book using the bookId
    //    the results in the book state above using setBook
    // });
    // if (!book) return null;

    return (
      <div book={book} key={book.id}>
        <div>{book.title}</div>
        <div>{book.author}</div>
        <div>{book.pages}</div>

        <button onClick={() => addItem(book.id)}> Add To Cart </button>
        {hasItem(book.id) && (
          <button onClick={() => removeItem(book.id)}>Remove From Cart</button>
        )}
      </div>
    );
  };

export default Book;
