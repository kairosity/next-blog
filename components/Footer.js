import Link from 'next/link'


const Footer = () => {
    return ( 
        <footer className="footer mt-auto py-3 d-flex flex-column align-items-center">
            <div className="row links-row">
                <div className="text-links-container links1-container d-flex flex-column justify-content-center col col-sm-10 col-md-6 col-lg-4">
                <div className="center-me">
                    <h5 className="footer-heading">Subsection1</h5>
                    <Link href="#"><a className="nav-link" >First Link</a></Link>
                    <Link href="#"><a className="nav-link" >Second Link</a></Link>
                    <Link href="#"><a className="nav-link">Third Link</a></Link>
                    <Link href="#"><a className="nav-link">Fourth Link</a></Link>
                </div>
                </div>
                <div className="text-links-container links1-container d-flex flex-column justify-content-center col col-sm-10  col-md-6 col-lg-4">
                <div className="center-me">
                    <h5 className="footer-heading">Subsection2</h5>
                    <Link href="#"><a className="nav-link">Fifth Link</a></Link>
                    <Link href="#"><a className="nav-link">Sixth Link</a></Link>
                    <Link href="#"><a className="nav-link">Seventh Link</a></Link>
                    <Link href="#"><a className="nav-link">Eighth Link</a></Link>
                </div>
                </div>
                <div className="text-links-container links1-container d-flex flex-column justify-content-center col col-sm-10  col-md-6 col-lg-4">
                <div className="center-me">
                    <h5 className="footer-heading">Subsection3</h5>
                    <Link href="#"><a className="nav-link">Ninth Link</a></Link>
                    <Link href="#"><a className="nav-link">Tenth Link</a></Link>
                    <Link href="#"><a className="nav-link">Eleventh Link</a></Link>
                    <Link href="#"><a className="nav-link">Twelfth Link</a></Link>
                </div>
                </div>
            </div>
            <div className="footer-social-media row d-flex flex-column">
                <div className="social-media-container d-flex flex-column">
                <ul className="nav navbar footbar">
                    <li className="nav-item "><a aria-label='twitter-link' className="nav-link" target="_blank" href="http://twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li className="nav-item "><a aria-label='facebook-link' className="nav-link" target="_blank" href="http://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="nav-item "><a aria-label='instagram-link' className="nav-link" target="_blank" href="http://instagram.com"><i className="fab fa-instagram"></i></a></li>
                    <li className="nav-item "><a aria-label='linkedin-link' className="nav-link" target="_blank" href="http://linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
                </div>
            </div>
            <p className="copyright-notice ">&copy <span id="year"></span> Health Blog</p>
        </footer>
    );
}

export default Footer;