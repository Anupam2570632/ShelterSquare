import { Link } from "react-router-dom";
import bgBanner from '../../assets/about-us-bg.jpg'
import { FaHome } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const AboutUs = () => {
    return (
        <div className="bg-cover bg-fixed bg-center" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgBanner})`
        }}>
            <Helmet>
                <title>ShelterSquare | About Us</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col-reverse lg:flex-row">
                    <img data-aos='fade-right' data-aos-duration='1500' src="http://androthemes.com/themes/react/acres/assets/img/listings-list/3.jpg" className="max-w-lg w-full rounded-lg object-cover object-center shadow-2xl" />
                    <div className="ml-8">
                        <p data-aos='fade-left' className="text-blue-700 mb-4 text-xl font-semibold">About Us</p>
                        <h1 data-aos='fade-left' data-aos-delay='500' className="text-5xl font-bold">We provide state of the art real estate service</h1>
                        <p data-aos='fade-left' data-aos-delay='700' className="py-6 text-[#333333]">Explore our meticulously curated selection of premier real estate properties. From urban lofts to countryside estates, we offer top-tier listings tailored to your needs.</p>
                        <div data-aos='fade-left' data-aos-delay='800'>
                            <Link to={'/'}>
                                <button className="btn btn-primary">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-transparent max-w-[70%] mx-auto py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div data-aos='fade-up' data-aos-duration='700' className="flex flex-col items-center justify-center gap-4">
                    <FaHome className="text-6xl text-white"></FaHome>
                    <p className="text-2xl font-bold text-white">30,303</p>
                    <h2 className="text-xl text-white font-semibold">Listing</h2>
                </div>
                <div data-aos='fade-up' data-aos-duration='700' className="flex flex-col items-center justify-center gap-4">
                    <FcManager className="text-6xl text-white"></FcManager>
                    <p className="text-2xl font-bold text-white">34,303</p>
                    <h2 className="text-xl text-white font-semibold">Agent</h2>
                </div>
                <div data-aos='fade-up' data-aos-duration='700' className="flex flex-col items-center justify-center gap-4">
                    <BsBuildings className="text-6xl text-white"></BsBuildings>
                    <p className="text-2xl font-bold text-white">14,303</p>
                    <h2 className="text-xl text-white font-semibold">Agencies</h2>
                </div>
                <div data-aos='fade-up' data-aos-duration='700' className="flex flex-col items-center justify-center gap-4">
                    <MdOutlineSell className="text-6xl text-white"></MdOutlineSell>
                    <p className="text-2xl font-bold text-white">76,303</p>
                    <h2 className="text-xl text-white font-semibold">Listings Sold</h2>
                </div>
            </div>

            <div className="bg-base-200 py-20">
                <div className="bg-base-200 space-y-4 max-w-[85%] mx-auto">
                    <h1 data-aos='fade-left' data-aos-duration='600' className="text-blue-700 font-bold">
                        Testimonials
                    </h1>
                    <p data-aos='fade left' data-aos-duration='600' data-aos-delay='600' className="text-4xl font-black">
                        What Are People Saying
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div className="space-y-4">
                            <div className="p-6 bg-[#f7f9fc] space-y-3">
                                <h2 className="text-[18px] font-bold">Perfect Services</h2>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p>
                                    Setting the standard for excellence. Immerse yourself in unparalleled quality and attention to detail that redefine perfection.
                                </p>
                            </div>
                            <div className="flex gap-4 items-center ">
                                <img data-aos='fade-right' data-aos-duration='500' className="w-20 rounded-xl" src="http://androthemes.com/themes/react/acres/assets/img/people/1.jpg" alt="" />
                                <div data-aos='fade-right' data-aos-duration='500' data-aos-delay='500'>
                                    <h1 className="text-xl font-bold">John Mishlen</h1>
                                    <p className="text-gray-500">CEO at company</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-6 bg-[#f7f9fc] space-y-3">
                                <h2 className="text-[18px] font-bold">Competitive prices</h2>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p>
                                Experience affordability without compromise. Benefit from our unmatched value and transparent pricing, ensuring satisfaction every time.                                </p>
                            </div>
                            <div className="flex gap-4 items-center ">
                                <img data-aos='fade-right' data-aos-duration='500' data-aos-delay='500' className="w-20 rounded-xl" src="http://androthemes.com/themes/react/acres/assets/img/people/2.jpg" alt="" />
                                <div data-aos='fade-right' data-aos-duration='500' data-aos-delay='1000'>
                                    <h1 className="text-xl font-bold">Moe Sondi</h1>
                                    <p className="text-gray-500">CEO at company</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="p-6 bg-[#f7f9fc] space-y-3">
                                <h2 className="text-[18px] font-bold">Great agents</h2>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p>
                                Elevate your experience with expert guidance. Our dedicated team of professionals provides support and expertise to guide you every step of the way.
                                </p>
                            </div>
                            <div className="flex gap-4 items-center ">
                                <img data-aos='fade-right' data-aos-duration='500' data-aos-delay='1000' className="w-20 rounded-xl" src="http://androthemes.com/themes/react/acres/assets/img/people/3.jpg" alt="" />
                                <div data-aos='fade-right' data-aos-duration='500' data-aos-delay='1500'>
                                    <h1 className="text-xl font-bold">Mandy Floss</h1>
                                    <p className="text-gray-500">CEO at company</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-[#f7f9fc] border border-gray-400">
                <div className=" py-10 max-w-[85%] mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between">
                    <div className="max-w-[450px] space-y-4">
                        <h2 className="text-3xl font-bold text-black">Download Our App</h2>
                        <p className="text-[#333333]">Get our app for easy browsing, scheduling viewings, and staying updated on real estate trends. Find your dream property with convenience in the palm of your hand.</p>
                    </div>
                    <div className="flex gap-6">
                        <button className="btn btn-outline text-xl btn-accent">
                            Google Play
                            <FaGooglePlay></FaGooglePlay>
                        </button>
                        <button className="btn btn-outline text-xl btn-accent">
                            App Store
                            <FaApple></FaApple>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;