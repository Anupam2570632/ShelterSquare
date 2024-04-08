import { FaArrowRight } from "react-icons/fa";

const BannerMessage = () => {
    return (
        <div className="space-y-4 text-black">
            <h2 className="text-2xl lg:text-5xl md:text-3xl  text-white font-bold">
                Welcome to <span className="text-lime-500">ShelterSquare</span> - Your Gateway to Finding Your Dream Home
            </h2>
            <p className="text-gray-200 mt-4 opacity-70 font-semibold">
                Find your dream home with ShelterSquare. Whether city apartment, suburban house, or waterfront townhouse, we have the widest selection for every budget. Explore today - your ideal living space is just a click away!
            </p>
            
            <a href="#estate" className="btn font-bold btn-accent btn-outline">
                See Now
                <FaArrowRight />
            </a>
        </div>
    );
};

export default BannerMessage;