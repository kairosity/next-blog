import SkipToMain from '../components/SkipToMain'

const Login = () => {
    return ( 
        <main>
            <div class="container">
                <aside class="login-stm">
                    <SkipToMain />
                </aside>
                <div class="row">
                    <div class="login-form form-container col col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 p-5">
                        <h1 id="main" class="mt-4">Login</h1>
                        <form action="/login" method="POST">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" name="email" class="form-control" id="email" aria-describedby="email"/>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" name="password" class="form-control" id="password" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;