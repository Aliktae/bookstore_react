import {useForm} from "react-hook-form";
import {ILogin} from "../../Interfaces";
import React from "react";
import {redirect} from "react-router-dom";

export const LoginPage = () => {
    const {register, handleSubmit, getValues, formState: { errors },reset} = useForm<ILogin>({mode:'onChange'});

    const onSubmit = () => {
      redirect('/')
    }
    return(
        <div className='center'>
            <h1>Welcome back to BookStore!</h1>
            <form className='loginForm' onSubmit={onSubmit}>
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