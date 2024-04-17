import { FaArrowRight } from "react-icons/fa";

const BannerMessage = () => {
    return (
        <div className="space-y-4 text-black">
            <h2 className="animate__animated animate__fadeInDown text-2xl lg:text-5xl md:text-3xl  text-white font-bold">
                Welcome to <span className="text-lime-500">ShelterSquare</span> - Your Gateway to Finding Your Dream Home
            </h2>
            <p className="animate__animated animate__backInRight text-[#CCCC] mt-4 ">
                Find your dream home with ShelterSquare. Whether city apartment, suburban house, or waterfront townhouse, we have the widest selection for every budget. Explore today - your ideal living space is just a click away!
            </p>
            <a  data-aos-delay='400' href="#estate" className="animate__animated animate__bounce animate__delay-1s btn font-bold btn-accent btn-outline">
                See Now
                <FaArrowRight />
            </a>
        </div>
    );
};

export default BannerMessage;