import {IBook} from "../../../Interfaces";
import React from "react";
import {updateBook} from "../../../services/bookService";
import {deleteBook} from "../../../services/bookService";

type BookCardProps = {
    book:IBook;
}

export const BookCard = ({book}:BookCardProps) => {
    const editBook = () => {
      updateBook(book.id);
    }
    const deleteBookFunc = () => {
        deleteBook(book.id);
    }
    return (
        <div className="bookCard">
            <h3> src={book.name}</h3>
            <h3>{book.category}</h3>
            <p>{book.description}</p>
            <p>{book.pages}</p>
            <h2>{book.price}</h2>
            <button onClick={editBook}>Edit</button>
            <button onClick={deleteBookFunc}>Delete</button>
        </div>
    )
}