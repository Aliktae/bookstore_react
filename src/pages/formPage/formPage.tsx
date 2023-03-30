import React, {useState} from 'react';
import './formPage.css';
import {IBook} from "../../Interfaces";
import {useForm} from "react-hook-form";
import {ListPage} from "../listPage";
import {createBook} from "../../services/bookService";
import {redirect} from "react-router-dom";
import {CategoryPage} from "./categoryPage";

export const FormPage = () => {
    const [bookList,setBookList] = useState<IBook[]>([]);
    const {register, handleSubmit, getValues, formState: { errors },reset} = useForm<IBook>({mode:'onChange'});

    const addBook = () => {
        const newBook: IBook = getValues();
        setBookList((prevBookList) => [...prevBookList, newBook]);
        createBook(newBook);
    };
    const onSubmit = handleSubmit( () =>{
       addBook();
        console.log(bookList);
        alert("You have successfully added a book!")
        reset()
    })

    return (
      <div className="form-page">
          <h1>Register a book:</h1>
          <form className="createForm" onSubmit={onSubmit}>
              <div className="inputBox">
                  <input type="text" placeholder="Enter the title"  {...register('name', {required: true, maxLength: 50})}/>
                  <div className="error">
                      {errors?.name && <p></p>}
                  </div>
              </div>
              <div className="inputBox">
                  <input type="text" placeholder="Enter the description" {...register('description', {maxLength: 100})}/>
              </div>
              <div className="inputBox">
                  <input type="number" placeholder="Enter the price" {...register('price', {required: true})}/>
                  <div className="error">
                      {errors?.price && <p></p>}
                  </div>
              </div>
              <div className="inputBox">
                  <input type="text" placeholder="Enter the category" {...register('category', {required: true})}/>
                  <div className="error">
                      {errors?.category && <p></p>}
                  </div>
              </div>
              <div className="inputBox">
                  <input type="number" placeholder="Enter the number of pages" {...register('pages', {required: true})}/>
                  <div className="error">
                      {errors?.pages && <p></p>}
                  </div>
              </div>
              <input type="submit" value="Submit"/>

          </form>
      </div>
  )
}

