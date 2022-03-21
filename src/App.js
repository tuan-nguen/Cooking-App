import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import RecipeForm from './components/RecipeForm';
import UserLoginForm from './components/UserLoginForm';
import UserSignUpForm from './components/UserSignUpForm';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import Footer from './components/Footer';
import Route from './components/Route';
import RecipeFormSuccess from './components/RecipeFormSuccess';

function App() {
    const [isLogInForm, setIsLogInForm] = useState(false);
    const [logInUser, setLogInUser] = useState(0);
    const [hasSignUp, setHasSignUp] = useState(false);
    const [recipePosted, setRecipePosted] = useState(false);
    // const [isSubmitForm, setIsSubmitForm] = useState(false);
    // const [isHomePage, setIsHomePage] = useState(true);


    return (
        <div>
            <Route path='/'>
                <Header />
                <WelcomePage />
                <Footer />
            </Route>
            <Route path='/signup'>
                {hasSignUp ? <UserLoginForm setHasSignUp={setHasSignUp} /> : <UserSignUpForm setHasSignUp={setHasSignUp} />}
            </Route>
            <Route path='/signin'>
                {isLogInForm
                    ? <LoginPage logInUser={logInUser} setIsLogInForm={setIsLogInForm} />
                    : <UserLoginForm setIsLoggedIn={setIsLogInForm} setLogInUser={setLogInUser} setHasSignUp={setHasSignUp}/>}
            </Route>
            <Route path='/recipe-form'>
                {recipePosted
                    ? <RecipeFormSuccess setRecipePosted={setRecipePosted}/>
                    : <RecipeForm logInUser={logInUser} setRecipePosted={setRecipePosted} />
                }
            </Route>
        </div>
    );
}

export default App;
