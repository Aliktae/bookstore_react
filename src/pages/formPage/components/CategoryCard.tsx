import {ICategory} from "../../../Interfaces";
import React from "react";
import {updateCategory,deleteCategory} from "../../../services/category";

type CategoryProps = {
    category:ICategory;
}

export const CategoryCard = ({category}:CategoryProps) => {
    const editCategory = () => {
        updateCategory(category.id);
    }
    const deleteCategoryFunc = () => {
        deleteCategory(category.id);
    }
    return (
        <div className="categorycard">
            <h3>{category.name}</h3>
            <button onClick={editCategory}>Edit</button>
            <button onClick={deleteCategoryFunc}>Delete</button>
        </div>
    )
}