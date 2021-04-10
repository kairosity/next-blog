const Footer = () => {
    return ( 
        <footer className="footer mt-auto py-3 d-flex flex-column align-items-center">
            <div className="row links-row">
                <div className="text-links-container links1-container d-flex flex-column justify-content-center col col-sm-10 col-md-6 col-lg-4">
                <div className="center-me">
                    <h5 className="footer-heading">Subsection1</h5>
                    <a className="nav-link" href="#">First Link</a>
                    <a className="nav-link" href="#">Second Link</a>
                    <a className="nav-link" href="#">Third Link</a>
                    <a className="nav-link" href="#">Fourth Link</a>
                </div>
                </div>
                <div className="text-links-container links1-container d-flex flex-column justify-content-center col col-sm-10  col-md-6 col-lg-4">
                <div className="center-me">
                    <h5 className="footer-heading">Subsection2</h5>
                    <a className="nav-link" href="#">Fifth Link</a>
                    <a className="nav-link" href="#">Sixth Link</a>
                    <a className="nav-link" href="#">Seventh Link</a>
                    <a className="nav-link" href="#">Eighth Link</a>
                </div>
                </div>
                <div className="text-links-container links1-container d-flex flex-column justify-content-center col col-sm-10  col-md-6 col-lg-4">
                <div className="center-me">
                    <h5 className="footer-heading">Subsection3</h5>
                    <a className="nav-link" href="#">Ninth Link</a>
                    <a className="nav-link" href="#">Tenth Link</a>
                    <a className="nav-link" href="#">Eleventh Link</a>
                    <a className="nav-link" href="#">Twelfth Link</a>
                </div>
                </div>
            </div>
            <div className="footer-social-media row d-flex flex-column">
                <div className="social-media-container d-flex flex-column">
                <ul className="nav navbar footbar">
                    <li className="nav-item "><a className="nav-link" href="http://twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li className="nav-item "><a className="nav-link" href="http://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="nav-item "><a className="nav-link" href="http://instagram.com"><i className="fab fa-instagram"></i></a></li>
                    <li className="nav-item "><a className="nav-link" href="http://linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
                </div>
            </div>
            <p className="copyright-notice ">&copy <span id="year"></span> Health Blog</p>
        </footer>
    );
}

export default Footer;