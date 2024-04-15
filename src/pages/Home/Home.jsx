import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Estate from "../../components/Estate/Estate";

const Home = () => {
    return (
        <div className="w-11/12 md:w-[85%] mx-auto">
            <Helmet>
                <title>ShelterSquare | Home</title>
            </Helmet>
            <Banner />
            <div className="my-10 md:py-20 space-y-4">
                <h2 className="text-4xl text-center font-black text-[#131313]">
                    Explore Your Dream Home
                </h2>
                <p className="font-medium text-center max-w-[800px] mx-auto text-black opacity-30">
                    Explore a diverse range of homes, from city apartments to waterfront villas. Each offers unique amenities for comfort and luxury. Start your search today and make your dream home a reality.
                </p>
                <hr className="w-11/12 md:w-9/12 mx-auto" />
                <Estate />
            </div>
        </div>
    );
};

export default Home;