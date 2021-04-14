import { useRef } from 'react';
import Head from 'next/head'
import SkipToMain from '../components/SkipToMain'
import { checkSession } from '../helpers/checkSession'

async function createNewUser(username, email, password, password2){

    let errors = [];

    // Custom Validations: Check passwords match
    if (password !== password2){
        errors.push({ msg: "Passwords do not match."});
    }

    if (errors.length > 0){
        console.log("There are errors")
        console.log(errors)
    } else {

        const response = await fetch('api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        if(!response.ok){
            throw new Error(data.message || 'Oops something went wrong!')
        }
        return data;
    }

}

const Register = () => {

    const usernameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const password2InputRef = useRef();

    checkSession();

    async function submitHandler(event){
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredPassword2 = password2InputRef.current.value;
        try{
            const result = await createNewUser(enteredUsername, enteredEmail, enteredPassword, enteredPassword2)
            console.log(result);
        } catch (error){
            console.log("Error:"+ error);
        }
        
    }

    return (
        <>
            <Head>
                <title>Health Blog | Register</title>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="keywords" content="healthblog, health, blog, health blog, nutrition, medicine, healthy living, registration"/>
                <meta name="description" content='Register a free account with Health Blog to gain access to super useful and exclusive Health Blog deals
                and other enticing things.'></meta>
                <meta name="geo.region" content="IE-D" />
                <meta name="geo.placename" content="Dublin" />
                <meta name="geo.position" content="53.349765;-6.260273" />
                <meta name="ICBM" content="53.349765, -6.260273" />
            </Head>
            <aside className="register-stm">
                <SkipToMain />
            </aside>
            <main>
                <div className="container">
                    <div id="main" className="row">
                        <div className="form-container register-form col col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 p-5">
                            <h1 className="mt-4">Register</h1>
                                <form className="mt-4" method="POST" onSubmit={ submitHandler }>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" name="username" className="form-control" id="username"
                                            aria-describedby="username" required ref={ usernameInputRef } />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" name="email" className="form-control" id="email"
                                            aria-describedby="emailHelp" required ref={ emailInputRef } />
                                        <div id="emailHelp" className="form-text">We'll never share your email with
                                            anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" name="password" className="form-control" id="password"
                                            aria-describedby="passwordHelp" ref={ passwordInputRef }/>
                                        <div id="passwordHelp" className="form-text">Please choose a password</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="passwordConfirmation" className="form-label">Password
                                            Confirmation</label>
                                        <input type="password" name="passwordConfirmation" className="form-control"
                                            id="passwordConfirmation" aria-describedby="passwordConfirmationHelp"
                                            ref={ password2InputRef } />
                                        <div id="passwordConfirmationHelp" className="form-text">Please enter your new
                                            password
                                            again</div>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" name="marketing" className="form-check-input" id="marketing" />
                                        <label className="form-check-label" htmlFor="marketing">Please send me a monthly
                                            email
                                            update.</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </form>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default Register;