import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <div className="navbar bg-base-100 font_work px-32 py-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/" className="font-normal text-[#0d0d0dcc] hover:bg-base-300 focus:bg-white focus:border focus:border-[#17BE0A] focus:text-[#17BE0A] focus:font-semibold bg-white rounded-lg py-2 px-3">Home</NavLink>
                            <NavLink to="/listed_books" className="font-normal text-[#0d0d0dcc] hover:bg-base-300 focus:bg-white focus:border focus:border-[#17BE0A] focus:text-[#17BE0A] focus:font-semibold bg-white rounded-lg py-2 px-3">Listed Books</NavLink>
                            <NavLink to="/page_to_read" className="font-normal text-[#0d0d0dcc] hover:bg-base-300 focus:bg-white focus:border focus:border-[#17BE0A] focus:text-[#17BE0A] focus:font-semibold bg-white rounded-lg py-2 px-3">Pages to Read</NavLink>
                        </ul>
                    </div>
                    <a className="font-bold text-3xl text-[#131313]">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/" className="mr-3 font-normal text-[#0d0d0dcc] hover:bg-base-300 focus:bg-white focus:border focus:border-[#17BE0A] focus:text-[#17BE0A] focus:font-semibold bg-white rounded-lg py-2 px-3">Home</NavLink>
                        <NavLink to="/listed_books" className="mr-3 font-normal text-[#0d0d0dcc] hover:bg-base-300 focus:bg-white focus:border focus:border-[#17BE0A] focus:text-[#17BE0A] focus:font-semibold bg-white rounded-lg py-2 px-3">Listed Books</NavLink>
                        <NavLink to="/page_to_read" className="font-normal text-[#0d0d0dcc] hover:bg-base-300 focus:bg-white focus:border focus:border-[#17BE0A] focus:text-[#17BE0A] focus:font-semibold bg-white rounded-lg py-2 px-3">Pages to Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <a className="btn bg-[#17BE0A] text-white font-medium">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white font-medium">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;