import {CreateCategoryDto, ICategory} from "../Interfaces";
import axios from "axios";

const API_HOST = 'https://asd.dar-dev.zone/api/v1'

export const getAllCategories = () => {
    return axios.get<ICategory[]>(`${API_HOST}/categories`).then((res) => res.data);
}

export const getCategory = (id:number) => {
    return  axios.get<ICategory>(`${API_HOST}/categories/${id}`).then((res) => res.data);
}

export const createCategory = (dto:CreateCategoryDto) => {
    return axios.post<ICategory>(`${API_HOST}/categories`,dto).then((res) => res.data);
}

export const updateCategory = (id:number) => {
    return  axios.put<ICategory>(`${API_HOST}/categories/${id}`).then((res) => res.data);
}

export const deleteCategory = (id:number) => {
    return  axios.delete(`${API_HOST}/categories/${id}`).then((res) => res.data);
}