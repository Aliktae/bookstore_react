export interface IBook{
    id:number,
    category:string,
    name:string,
    description:string,
    price:number,
    pages:number;
}

export interface CreateBookDto{
    category:string,
    name:string,
    description:string,
    price:number,
    pages:number;
}

export interface IUser {
    id: number,
    name: string,
    email: string,
}

export interface ISignUp {
    name: string,
    email:string,
    password:string;
}

export interface ILogin {
    email: string,
    password: string;
}
export interface CreateUserDto{
    name: string,
    email: string,
    password: string;
}

export interface ISignupDto {
    name: string,
    email:string,
    password:string;
}

export interface ICategory {
    id: number,
    name: string;
}

export interface CreateCategoryDto {
    name: string,
}