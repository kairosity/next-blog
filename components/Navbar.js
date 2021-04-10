const Navbar = () => {
    return ( 
        <nav class="navbar shadow-sm navbar-expand-lg navbar-light d-flex align-content-center align-items-start fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/blog"><i class="fas fa-heartbeat"></i></a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link hvr-underline-from-center" aria-current="page" href="/blog">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link hvr-underline-from-center" href="/register">Register</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link hvr-underline-from-center" href="/login">Login</a>
                        </li>
                    </ul>
                    <form class="d-flex search" action="/blog/search" method="GET">
                        <input class="form-control me-2" type="text" name="keyword" placeholder="Search Posts"
                            aria-label="Search"/>
                        <button class="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;