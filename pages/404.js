import Link from 'next/link'

const NotFound = () => {
    return ( 
        <main class="main-404 row">
            <div class="col col-10 offset-1 col-md-8 offset-md-2">
            <h1 class="heading-404 mt-5">404 Error: Page Not Found.</h1> 
            <h2>Sorry, but we cannot find the page you are looking for. Please check your url and try again.</h2>
            <Link href="/blog"><a class="btn btn-primary mt-4"><i class="fas fa-long-arrow-alt-left"></i> Back to Health Blog</a></Link>
        </div>
        </main>
    );
}

export default NotFound;