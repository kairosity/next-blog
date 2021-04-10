import Head from 'next/head'
import SkipToMain from '../components/SkipToMain'

const Login = () => {
    return (
        <>
        <Head>
            <title>Health Blog | Login</title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="keywords" content="healthblog, health, blog, health blog, nutrition, medicine, healthy living, login"/>
            <meta name="description" content='Login to your very own Health Blog user account where you can access exclusive information and other 
            resources.'></meta>
            <meta name="geo.region" content="IE-D" />
            <meta name="geo.placename" content="Dublin" />
            <meta name="geo.position" content="53.349765;-6.260273" />
            <meta name="ICBM" content="53.349765, -6.260273" />
        </Head>
        <main>
            <div className="container">
                <aside className="login-stm">
                    <SkipToMain />
                </aside>
                <div className="row">
                    <div className="login-form form-container col col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 p-5">
                        <h1 id="main" className="mt-4">Login</h1>
                        <form action="/login" method="POST">
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" id="email" aria-describedby="email"/>
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}

export default Login;