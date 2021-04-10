import Head from 'next/head'
import SkipToMain from '../components/SkipToMain'

const Register = () => {
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
                                <form className="mt-4" action="/register" method="POST">
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Username</label>
                                        <input type="text" name="username" className="form-control" id="username"
                                            aria-describedby="username" required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" name="email" className="form-control" id="email"
                                            aria-describedby="emailHelp" required />
                                        <div id="emailHelp" className="form-text">We'll never share your email with
                                            anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" name="password" className="form-control" id="password"
                                            aria-describedby="passwordHelp" />
                                        <div id="passwordHelp" className="form-text">Please choose a password</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="passwordConfirmation" className="form-label">Password
                                            Confirmation</label>
                                        <input type="password" name="passwordConfirmation" className="form-control"
                                            id="passwordConfirmation" aria-describedby="passwordConfirmationHelp" />
                                        <div id="passwordConfirmationHelp" className="form-text">Please enter your new
                                            password
                                            again</div>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" name="marketing" className="form-check-input" id="marketing" />
                                        <label className="form-check-label" for="marketing">Please send me a monthly
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