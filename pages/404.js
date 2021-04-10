import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    // Automatic redirect to homepage after 4secs if user doesn't click link.
    useEffect(() => {
        setTimeout(() => {
            router.push('/blog')
        }, 4000)
    }, [])

    return ( 
        <main className="main-404 row">
            <div className="col col-10 offset-1 col-md-8 offset-md-2">
            <h1 className="heading-404 mt-5">404 Error: Page Not Found.</h1> 
            <h2>Sorry, but we cannot find the page you are looking for. Please check your url and try again.</h2>
            <Link href="/blog"><a className="btn btn-primary mt-4"><i className="fas fa-long-arrow-alt-left"></i> Back to Health Blog</a></Link>
        </div>
        </main>
    );
}

export default NotFound;