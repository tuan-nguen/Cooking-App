import './App.css';
import { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import UserLoginForm from './components/UserLoginForm';
import UserSignUpForm from './components/UserSignUpForm';
import RecipeFormSuccess from './components/RecipeFormSuccess';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/LoginPage';
import Test from './backup/Test';

function App() {
    const [isLogInForm, setIsLogInForm] = useState(false);
    const [logInUser, setLogInUser] = useState(0);
    const [recipePosted, setRecipePosted] = useState(false);
    console.log(isLogInForm);
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/sign-up' element={<UserSignUpForm />} />
                <Route path='/update-user/:id' element={<UserSignUpForm isUpdating={true} />} />
                <Route
                    path='sign-in'
                    element={
                        isLogInForm
                            ? <Navigate to='/logged-in' />
                            : <UserLoginForm setIsLogInForm={setIsLogInForm} setLogInUser={setLogInUser} />
                    }
                />
                {isLogInForm && <Route path='/logged-in' element={<LoginPage logInUser={logInUser} setIsLogInForm={setIsLogInForm} />} />}
                <Route
                    path='recipe-form'
                    element={recipePosted 
                        ? <RecipeFormSuccess setRecipePosted={setRecipePosted}/>
                        : <RecipeForm logInUser={logInUser} setRecipePosted={setRecipePosted}/>}
                />
                <Route
                    path='recipe-form/:id'
                    element={recipePosted 
                        ? <RecipeFormSuccess setRecipePosted={setRecipePosted}/>
                        : <RecipeForm logInUser={logInUser} setRecipePosted={setRecipePosted} isUpdating={true} />}
                />
            </Routes>
        </Router>

        // <div>
        //     <Test /> 
        // </div>
    );
}

export default App; 