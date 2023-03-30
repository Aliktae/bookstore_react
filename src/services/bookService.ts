import axios from "axios";
import {CreateBookDto, IBook} from "../Interfaces";

const API_HOST = 'https://asd.dar-dev.zone/api/v1'

export const getAllBooks = () => {
    return (axios.get<IBook[]>(`${API_HOST}/books`)).then((res) => res.data);
}
export const getBookById = (id:number) => {
    return axios.get<IBook>(`${API_HOST}/books/${id}`).then((res) => res.data);
}

export const createBook =  (dto: CreateBookDto) => {
    return axios.post<IBook>(`${API_HOST}/books`,dto).then((res) => res.data);
}

export const updateBook = (id:number) => {
   return axios.put<IBook>(`${API_HOST}/books/${id}`).then((res) => res.data);
}

export const deleteBook = async (id:number) => {
    return axios.delete(`${API_HOST}/books/${id}`).then((res) => res.data);
}