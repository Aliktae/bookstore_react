import './registrationPage.css'
import {useForm} from "react-hook-form";
import {ISignUp, ISignupDto, IUser} from "../../Interfaces";
import React, {useState} from "react";
import axios from "axios";
import {redirect} from "react-router-dom";

export const RegistrationPage = () => {
    const {register, handleSubmit, getValues, formState: { errors },reset} = useForm<ISignUp>({mode:'onChange'});

    const addUser = () => {
        const signupDto: ISignupDto = getValues()
        axios.post('url', signupDto)
    }
    const onSubmit = handleSubmit(() => {
        addUser();
        redirect('/login');
        reset();
    })
    return(
            <div className='center'>
                <h1>Welcome to BookStore</h1>
                <h3>Join our community to become a happy reader 📖</h3>
                <form className='registrationForm' onSubmit={onSubmit}>
                    <div className="box">
                        <label>Name:</label>
                        <input type="text" {...register('name', {required: true, maxLength: 50})}/>
                        <div className="error">
                            {errors?.name && <p></p>}
                        </div>
                    </div>
                    <div className="box">
                        <label>Email:</label>
                        <input type="email" {...register('email', {maxLength: 100, pattern:{value:/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu, message:'Enter valid email address'}})}/>
                        <div className='error'>
                            {errors?.email && <p>{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="box">
                        <label>Password:</label>
                        <input type="string" {...register('password', {required: true})}/>
                        <div className="error">
                            {errors?.password && <p></p>}
                        </div>
                    </div>

                    <input className='submitButton' type="submit" value="Submit"/>
                </form>
            </div>
    )
}