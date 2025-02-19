import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


const Estate = () => {
    const { estate } = useContext(AuthContext)

    return (
        <div id="estate" className="pt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {
                estate.map(aState => <div data-aos='zoom-in' data-aos-duration='1000' className="flex flex-col" key={aState.id}>
                    <div className="relative border border-transparent rounded-t-xl">
                        <div className="absolute rounded-t-xl inset-0 bg-black bg-opacity-30">

                        </div>
                        <img className="rounded-[12px] p-6 h-[250px] w-full object-cover object-center" src={aState.image} alt="" />
                    </div>
                    <div className="p-6 space-y-4 h-full border flex flex-col border-t-0 rounded-b-xl border-gray-300">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl text-wrap font-bold text-[#131313]">{aState.estate_title}</h2>
                            <h2 className="text-black min-w-[80px] rounded-xl px-1 border-2 border-purple-400"><span className="text-[18px] font-semibold">For : </span> <span className="opacity-65">{aState.status}</span></h2>
                        </div>
                        <h3 className="text-[20px] font-semibold text-cyan-500">{aState.segment_name}</h3>
                        
                        <hr />
                        <div className="flex items-center justify-between">
                            <h2 className="text-black"><span className="text-[18px] font-semibold">Price : </span> <span className="opacity-65">{aState.price}</span></h2>
                            <h2 className="text-black"><span className="text-[18px] font-semibold">Area : </span> <span className="opacity-65">{aState.area}</span></h2>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[18px] font-semibold">Facilities : </span>
                            <div className="flex flex-wrap gap-1">
                                {
                                    aState.facilities.map((facility, idx) => <div className="" key={idx}>
                                        <h1 className="border bg-purple-300 border-black font-medium px-3 py-2">{facility}</h1>
                                    </div>)
                                }
                            </div>
                        </div>

                        <h2 className="flex gap-2 items-center text-black opacity-65"><CiLocationOn className="text-xl" /> {aState.location}</h2>

                        <hr />
                        <div className="h-full w-full flex items-end justify-end">
                            <Link className="w-full" to={`/property-details/${aState.id}`}>
                                <button className="btn btn-accent font-bold w-full">
                                    {aState.button_text}
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>)
            }
        </div>
    );
};

export default Estate;