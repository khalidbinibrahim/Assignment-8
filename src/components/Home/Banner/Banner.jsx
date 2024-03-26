import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="px-32 pb-12">
            <div className="bg-[#1313130D] rounded-3xl">
                <div className="px-28 py-20 flex justify-between items-center">
                    <div>
                        <h1 className="font_playfair text-[#131313] font-bold text-5xl mb-10 leading-[68px]">Books to freshen up your bookshelf</h1>
                        <NavLink to="/listed_books" className="btn bg-[#17BE0A] text-white font-medium font_work">View The List</NavLink>
                    </div>

                    <div>
                        <img src="pngwing 1.png" alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;