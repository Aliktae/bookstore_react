import React from "react";
import {IBook} from "../../../Interfaces";

type Props = {
    book: IBook;
}
export const BookList = ({book}: Props) => {
    const EditForm = () => {

    }
    return(
    <div className="booksList">
        <div className="bookCard">
            <img src={book.img}/>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <h2>{book.price}</h2>
            <button onClick={EditForm}>Edit</button>
        </div>
    </div>
    )}