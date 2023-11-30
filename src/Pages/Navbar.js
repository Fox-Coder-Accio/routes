import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {

    return(
        <nav className="nav">
            <NavLink to="/"> Home </NavLink> 
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/contact"> Contact </NavLink>
            <NavLink to="/blog"> Blog </NavLink>
        </nav>
    )
}

export default Navbar;





{/*  */}


            //     <a href="/">Home</a>
            // <a href="/about">About</a>
            // <a href="/contact">Contact</a>
            // <a href="/blog">Blog</a> 