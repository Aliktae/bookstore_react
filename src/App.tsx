import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {FormPage} from './pages/formPage';
import {HomePage} from "./pages/homePage";
import {ListPage} from "./pages/listPage";
import {RegistrationPage} from "./pages/registrationPage/registrationPage";
import {LoginPage} from "./pages/loginPage/loginPage";
import {CategoryPage} from "./pages/formPage/categoryPage";
import {CategoryList} from "./pages/formPage/components/CategoryList";

const App = () => {

  return (
        <Router>
            <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/form" element={<FormPage />} />
                    <Route path="/list" element={<ListPage />} />
                    <Route path='/registration' element={<RegistrationPage />}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/category' element={<CategoryPage/>}/>
                    <Route path='/categoryList' element={<CategoryList/>}/>

            </Routes>
        </Router>
  );
}

export default App;
