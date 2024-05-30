import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../footer/Footer";
import "./nav.css"

const Nav = () => {
    const navigation = useNavigation()
    return (
        <div>
            <ul>
                <NavLink to={"home"}>Home</NavLink>
                <NavLink to={"contact"}>Contact</NavLink>
                <NavLink to={"users"}>Users</NavLink>
                <NavLink to={"post"}>Post</NavLink>
            </ul>
            {
                navigation.state === "loading"? <p>Loading..............</p> :<Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Nav;