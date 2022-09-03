import React from "react";
import Book from "../Book/Book";
import useFetch from "../Hooks/useFetch";

const Books = ({ addBook }) => {
  const { data } = useFetch("http://localhost:3001/api/book?limit=100");
  return (
    <div>
      {data.map((book) => {
        return <Book book={book} key={book.id} addBook={addBook} />;
      })}
    </div>
  );
};

export default Books;
