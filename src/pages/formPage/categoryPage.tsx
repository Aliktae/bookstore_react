import {useForm} from "react-hook-form";
import {IBook, ICategory} from "../../Interfaces";
import React from "react";
import {createCategory, updateCategory} from "../../services/category";
import {redirect} from "react-router-dom";

export const CategoryPage = () => {

    const {register, handleSubmit, getValues, formState: { errors },reset} = useForm<ICategory>({mode:'onChange'});

    const onSubmit = handleSubmit( () =>{
        const newCategory:ICategory = getValues();
        createCategory(newCategory);
        alert('Category added')
    })

    return(
            <form className="createForm" onSubmit={onSubmit}>
                <div className="inputBox">
                    <input type="text" placeholder="Enter the name"  {...register('name', {required: true, maxLength: 50})}/>
                    <div className="error">
                        {errors?.name && <p></p>}
                    </div>
                </div>
                <input type="submit" value="Submit"/>
            </form>
    )
}