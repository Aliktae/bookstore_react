import React, {useEffect, useState} from "react";
import {ICategory} from "../../../Interfaces";
import {CategoryCard} from "./CategoryCard";
import {getAllCategories} from "../../../services/category";
import {CategoryPage} from "../categoryPage";

export const CategoryList = () => {
    const [categories,setCategories] = useState<ICategory[]>([]);
    const [error,setError] = useState('');
    useEffect(() => {
        getAllCategories()
            .then(data => setCategories(data))
            .catch(err => setError(err))
    })
    if (error){
        return <div>Error: ${error}</div>
    }
    const renderedCategories = categories.map(category => (
        <CategoryCard key={category.id} category={category}/>
    ))

    return(
        <div className="booksList">
            <button onClick={CategoryPage}>Add Category</button>
            <div>{renderedCategories}</div>
        </div>
    )}