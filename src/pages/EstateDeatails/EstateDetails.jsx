import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight, FaCartArrowDown } from "react-icons/fa";


const EstateDetails = () => {
    const { id } = useParams()
    const { estate } = useContext(AuthContext)
    const property = estate.find(item => item.id == id)
    console.log(property)
    return (
        <div className="w-11/12 mb-10 lg:w-[70%] mx-auto border p-6 space-y-4 border-cyan-700 rounded-[14px]">
            <Helmet>
                <title>ShelterSquare | Details-[{property.estate_title}]</title>
            </Helmet>
            {
                <>
                    <img data-aos='zoom-in' className="rounded-[10px] pb-6" src={property.image} alt="" />
                    <h2 data-aos='fade-left' data-aos-duration='500' className="font-black text-2xl text-[#131313]">{property.estate_title}</h2>
                    <p data-aos='fade-left' data-aos-duration='500' data-aos-delay='500' className="font-bold text-purple-400 text-xl">{property.segment_name}</p>
                    <hr />
                    <p data-aos='fade-up' data-aos-delay='1000' className="text-[#333333]">
                        {property.description}
                    </p>
                    <hr />
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className=" font-bold">Price : <span className="text-[16px] font-medium text-gray-600">{property.price}</span></h2> <h2 className="font-bold underline underline-offset-4">For : <span className="text-[16px] font-medium text-gray-600">{property.status}</span></h2>


                        </div>
                        <h2 className=" font-bold">Area : <span className="text-[16px] font-medium text-gray-600">{property.area}</span></h2>
                        <h2 className="flex gap-2 items-center text-black opacity-65"><CiLocationOn className="text-xl" /> {property.location}</h2>

                        <p className=" font-bold">Facilities : </p>
                        <ul className="list-none flex gap-4">
                            {
                                property.facilities.map((prop, idx) => <li className="px-3 bg-purple-200 py-1" key={idx}>{prop}</li>)
                            }
                        </ul>
                    </div>
                    <div className="w-full text-end">
                        <button className="btn btn-secondary">
                            <FaCartArrowDown className="text-xl"></FaCartArrowDown>
                            Add to cart
                            <FaArrowRight className="text-xl"></FaArrowRight>
                        </button>
                    </div>
                </>
            }
        </div>
    );
};

export default EstateDetails;