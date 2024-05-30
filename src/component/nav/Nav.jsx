import { Outlet } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
            </ul>
            <Outlet></Outlet>
        </div>
    );
};

export default Nav;