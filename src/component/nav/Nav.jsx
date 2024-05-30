import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import "./nav.css"

const Nav = () => {
    return (
        <div>
            <ul>
                <Link to={"home"}>Home</Link>
                <Link to={"contact"}>Contact</Link>
                <Link to={"users"}>Users</Link>
                <Link to={"post"}>Post</Link>
            </ul>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Nav;