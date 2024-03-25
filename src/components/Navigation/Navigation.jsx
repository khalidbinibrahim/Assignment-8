import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <h2>This is NAVIGATION</h2>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/next">NEXT</NavLink>
        </div>
    );
};

export default Navigation;