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
      <div
        className="font-sans inline-grid grid-rows-3 gap-2 bg-amber-50 p-5 rounded-md text-sm"
        book={book}
        key={book.id}
      >
        <div className="text-yellow-600 ">
          <span className="text-lime-900 font-bold">Title:</span> {book.title}
        </div>
        <div className="text-yellow-900">
          <span className="text-lime-900 font-bold">Author:</span> {book.author}
        </div>
        <div className="text-lime-900">Pages: {book.pages}</div>

        <button
          className="bg-lime-900 text-amber-50 p-3 rounded-md"
          onClick={() => addItem(book.id)}
        >
          {" "}
          Add To Cart{" "}
        </button>
        {hasItem(book.id) && (
          <button onClick={() => removeItem(book.id)}>Remove From Cart</button>
        )}
      </div>
    );
  };

export default Book;
