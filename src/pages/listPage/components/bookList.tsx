import React, {useEffect, useState} from "react";
import {IBook} from "../../../Interfaces";
import '../listPage.css'
import {BookCard} from "./bookCard";
import {FormPage} from "../../formPage";
import {getAllBooks} from "../../../services/bookService";

export const BookList = () => {
    const [books,setBooks] = useState<IBook[]>([]);
    const [error,setError] = useState('');
    useEffect(() => {
        getAllBooks()
            .then(data => setBooks(data))
            .catch(err => setError(err))
    })
     if (error){
        return <div>Error: ${error}</div>
    }
    const renderedBooks = books.map(book => (
        <BookCard key={book.id} book={book}/>
    ))

    return(
    <div className="booksList">
        <button onClick={FormPage}>Add Book</button>
       <div>{renderedBooks}</div>
    </div>
    )}