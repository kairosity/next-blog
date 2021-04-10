import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return ( 
        <body>
            <Navbar />
            { children }
            <Footer />
        </body>
    );
}

export default Layout;