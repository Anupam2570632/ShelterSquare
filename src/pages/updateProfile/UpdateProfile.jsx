import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

import {
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";

const UpdateProfile = () => {
    const navigate = useNavigate()
    const { user, updateUserInformation, setReload } = useContext(AuthContext)
    const [name, setName] = useState(user?.displayName)
    const [photoURL, setPhotoURL] = useState(user?.photoURL)
    console.log(name, photoURL)

    const handleUpdateUserInformation = (e) => {
        e.preventDefault()
        const newName = e.target.name.value
        const newPhotoURL = e.target.photoURL.value
        updateUserInformation(newName, newPhotoURL)
            .then(() => {
                console.log('update successfully')
                setReload(true)
            })
            .catch(error => {
                console.error(error)
            })
        navigate('/')
    }

    return (
        <div className="p-10 m-0 bg-base-200 flex items-center justify-center">
            <div className="h-[640px] bg-base-200 w-screen flex items-center justify-center">
                <form onSubmit={handleUpdateUserInformation} className="w-96 mx-auto">
                    <CardHeader
                        variant="gradient"
                        color="gray"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Register Now!
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input onChange={(e) => setName(e.target.value)} value={name} name="name" required label="Your Name" type="text" size="lg" />
                        <Input value={user?.email ? user.email : 'no email found'} name="email" disabled label="Your Email" type="email" size="lg" />
                        <Input onChange={(e) => setPhotoURL(e.target.value)} value={photoURL} name="photoURL" required label="Photo URL" type="text" size="lg" />
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