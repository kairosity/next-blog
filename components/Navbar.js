
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/client';

const Navbar = () => {
    const [session, loading] = useSession();

    function logoutHandler(){
        signOut();
    }
    return ( 
        <nav className="navbar shadow-sm navbar-expand-lg navbar-light d-flex align-content-center align-items-start fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link href="/blog"><a className="navbar-brand"><i className="fas fa-heartbeat"></i></a></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/blog">
                                <a className="nav-link hvr-underline-from-center" aria-current="page">
                                    Home
                                </a>
                            </Link>
                        </li>
                        { !session && !loading &&(
                            <li className="nav-item">
                                <Link href="/register">
                                    <a className="nav-link hvr-underline-from-center" >
                                        Register
                                    </a>
                                </Link>
                            </li>
                        )}
                        { !session && !loading && (
                            <li className="nav-item ">
                                <Link href="/login">
                                    <a className="nav-link hvr-underline-from-center">
                                        Login
                                    </a>
                                </Link>
                            </li>
                        )}
                        { session && (
                            <li className="nav-item">
                                <Link href="/user-dashboard">
                                    <a className="nav-link hvr-underline-from-center" aria-current="page">
                                        User Dashboard
                                    </a>
                                </Link> 
                            </li>
                        )}
                        { session && (
                            <li className="nav-item">
                                <a className="nav-link hvr-underline-from-center logout-link" aria-current="page" onClick={logoutHandler}>
                                    Logout
                                </a>
                            </li>
                        )}
                    </ul>
                    <form className="d-flex search" action="/blog/search" method="GET">
                        <input className="form-control me-2" type="text" name="keyword" placeholder="Search Posts"
                            aria-label="Search"/>
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;