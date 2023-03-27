import React, {useState} from 'react';
import './formPage.css';
import {IBook} from "../../Interfaces";
import {useForm} from "react-hook-form";
import {BookList} from "./components/BookList";

export const FormPage = () => {
    const [book,setBook] = useState<IBook>();
    const [bookList,setBookList] = useState<IBook[]>([]);
    const {register, handleSubmit, formState: { errors },reset} = useForm<IBook>({mode:'onChange'});
    const onSubmit = handleSubmit(() =>{
        addBook();
        console.log(bookList);
        alert("You have successfully added a book!")
        reset()
    })

    const addBook = () => {
        if (!book){
            return
        }
        const newBook: IBook = {
            id: Date.now(),
            img: book.img,
            title: book.title,
            author: book.author,
            description: book.description,
            price: book.price,
            genre: book.genre
        };
        setBookList((prevBookList) => [...prevBookList, newBook]);
    };

    return (
      <div className="form-page">
          <h1>Register a book:</h1>
          <form className="createForm" onSubmit={onSubmit}>
              <div className="inputBox">
                  <input type="text" placeholder="Enter the title"  {...register('title', {required: true, maxLength: 50})}/>
                  <div className="error">
                      {errors?.title && <p></p>}
                  </div>
              </div>
              <div className="inputBox">
                  <input type="text" placeholder="Enter the link to the image" {...register('img')}/>
              </div>
              <div className="inputBox">
                  <input type="text" placeholder="Enter the author" {...register('author', {required: true, maxLength: 30})}/>
                  <div className="error">
                      {errors?.author && <p></p>}
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
                  <input type="text" placeholder="Enter the genre" {...register('genre', {required: true})}/>
                  <div className="error">
                      {errors?.genre && <p></p>}
                  </div>
              </div>
              <input type="submit" value="Submit"/>
          </form>
          <div className="bookList" style={{display: book? "flex":"none"}}>
              {bookList.map((book,id) => {
                  return <BookList key={id} book={book}/>;
              })}
          </div>
      </div>
  )
}
