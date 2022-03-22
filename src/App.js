import './App.css';
import { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import UserLoginForm from './components/UserLoginForm';
import UserSignUpForm from './components/UserSignUpForm';
import RecipeFormSuccess from './components/RecipeFormSuccess';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import LoginPage from './components/LoginPage'; 

function App() {
    const [isLogInForm, setIsLogInForm] = useState(false);
    const [logInUser, setLogInUser] = useState(0);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />}/> 
                <Route path='/sign-up' element={<UserSignUpForm />} />
                <Route path='/sign-in' element={<UserLoginForm setIsLogInForm={setIsLogInForm} setLogInUser={setLogInUser} />} />
                {/* {isLogInForm && <Route path='/logged-in' element={<LoginPage />} />} */}
            </Routes>
        </Router>
    );
}

export default App;
