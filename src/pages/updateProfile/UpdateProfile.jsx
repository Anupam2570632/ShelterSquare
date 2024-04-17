import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import {
    CardBody,
    CardFooter,
    Button,
} from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const navigate = useNavigate()
    const { user, updateUserInformation } = useContext(AuthContext)
    const [name, setName] = useState(user?.displayName)
    const [photoURL, setPhotoURL] = useState(user?.photoURL)

    const handleUpdateUserInformation = (e) => {
        e.preventDefault()
        const newName = e.target.name.value
        const newPhotoURL = e.target.photoURL.value
        updateUserInformation(newName, newPhotoURL)
            .then(() => {
                console.log('update successfully')
                navigate('/update-profile')
                toast.success("Profile Info updated successfully")
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="p-10 m-0 bg-base-200 mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-start">
            <Helmet>
                <title>ShelterSquare | Update Profile</title>
            </Helmet>
            <div className="text-start py-10 space-y-4">
                <h2 className="text-2xl animate__animated animate__fadeInDown md:text-3xl font-bold">
                    Hello! <span className="text-blue-500"> {user.displayName}</span>
                </h2>
                <p data-aos='fade-left' data-aos-delay='600' className="max-w-[340px] text-[#333333] leading-6">
                    Keep your profile current and accurate. Edit your details with ease on our Update Profile page. Effortlessly adjust your name, photoURL. Simple, intuitive, and hassle-free.
                </p>
            </div>
            <div className="animate__animated animate__fadeInRight animate__delay-1s h-auto bg-base-200 flex items-center justify-center">
                <form onSubmit={handleUpdateUserInformation} className="w-96 border border-[#CCCCCC] rounded-xl mx-auto">
                    <CardBody className="flex flex-col gap-4">
                        <label htmlFor="name">Your Name</label>
                        <input className="p-3 rounded-xl" id="name" onChange={(e) => setName(e.target.value)} value={name} name="name" required type="text" size="lg" />
                        <label htmlFor="email">Your Email</label>
                        <input className="p-3 rounded-xl" id="email" value={user?.email ? user.email : 'no email found'} name="email" disabled type="email" size="lg" />
                        <label htmlFor="photoURL">Photo URL</label>
                        <input className="p-3 rounded-xl" id="photoURL" onChange={(e) => setPhotoURL(e.target.value)} value={photoURL} name="photoURL" required type="text" size="lg" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button type="submit" className="mt-6" fullWidth>
                            Update
                        </Button>
                    </CardFooter>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;