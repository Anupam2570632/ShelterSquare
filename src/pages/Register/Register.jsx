import {
    Input,
    Checkbox,
    Button,
    Typography,
    CardHeader,
    CardFooter,
    CardBody,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const Register = () => {
    const [show, setShow] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const { createAccount, FacebookSignIn, GoogleSignIn, GithubSignIn, updateUserInformation, setReload } = useContext(AuthContext)
    console.log(setReload)
    const [passwordError, setPAsswordError] = useState(null)

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photoURL = e.target.photoURL.value

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setPAsswordError('password must contain at least 6 character and contain an Uppercase and a Lowercase letter')
            return
        }

        createAccount(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                toast.success('Account created successfully')
                updateUserInformation(name, photoURL)
                setReload(true)
                signOut(auth)
                navigate('/login')
            })
            .catch(error => {
                console.error(error.message)
                if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('email already in use')
                }
            })

    }


    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                navigate('/')
                console.log(result.user)
                toast.success('Log in successfully')
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleFacebookSIgnIn = () => {
        FacebookSignIn()
            .then(result => {
                navigate('/')
                console.log(result.user)
                toast.success('Log in successfully')
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGithubSignIn = () => {
        GithubSignIn()
            .then(result => {
                navigate('/')
                console.log(result.user)
                toast.success('Log in successfully')
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="p-10 m-0 bg-base-200 flex items-center justify-center">
            <Helmet>
                <title>ShelterSquare | Register</title>
            </Helmet>
            <div className="h-[750px] bg-base-200 w-screen flex items-center justify-center">
                <form onSubmit={handleRegister} className="w-96 mx-auto">
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
                        <Input name="name" required label="Your Name" type="text" size="lg" />
                        <Input name="photoURL" required label="Photo URL" type="text" size="lg" />
                        <Input name="email" required label="Your Email" type="email" size="lg" />
                        <div className="relative">
                            <Input name="password" required label="Password" type={show ? "text" : "password"} size="lg" />
                            {
                                show ?
                                    <FaRegEyeSlash onClick={() => setShow(false)} className="absolute right-4 text-xl top-[14px]"></FaRegEyeSlash>
                                    :
                                    <FaRegEye onClick={() => setShow(true)} className="absolute right-4 text-xl top-[14px]"></FaRegEye>
                            }
                        </div>
                        {
                            passwordError && <div>
                                <p className="text-red-700 text-[14px] font-bold">{passwordError}</p>
                            </div>
                        }
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <p
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </p>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button type="submit" className="mt-6" fullWidth>
                            Register
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <Link to={'/login'} className="font-medium text-gray-900">
                                Log In
                            </Link>
                        </Typography>
                    </CardFooter>
                    <div className="space-y-2">
                        <h2 className="text-center flex w-full items-center justify-center gap-2 px-8"><span className="flex-1"><div className="w-full h-[1px] border border-black border-opacity-20"></div></span><span className="font-bold opacity-80">Or continue with</span><span className="flex-1"><div className="w-full h-[1px] border border-black border-opacity-20"></div></span></h2>
                        <hr />
                        <div className="flex mt-2 items-center justify-between max-w-52 mx-auto">
                            <div onClick={handleGoogleSignIn} className="btn btn-outline btn-circle text-red-500 p-2">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21" className="w-full h-full"><path fill="#4285F4" d="M10 8.682v3.872h5.382a4.6 4.6 0 0 1-2.01 3.01l3.246 2.518c1.89-1.746 2.982-4.31 2.982-7.355 0-.709-.064-1.39-.182-2.045z"></path><path fill="#34A853" d="m4.396 12.403-.732.56-2.591 2.019C2.718 18.245 6.09 20.5 10 20.5c2.7 0 4.963-.89 6.618-2.418l-3.246-2.518c-.89.6-2.027.963-3.372.963-2.6 0-4.81-1.754-5.6-4.118z"></path><path fill="#FBBC05" d="M1.073 6.018A9.9 9.9 0 0 0 0 10.5c0 1.618.39 3.136 1.073 4.482C1.073 14.99 4.4 12.4 4.4 12.4c-.2-.6-.318-1.237-.318-1.9 0-.664.118-1.3.318-1.9z"></path><path fill="#EA4335" d="M10 4.482c1.473 0 2.782.509 3.827 1.49l2.864-2.863C14.954 1.491 12.7.5 10 .5 6.09.5 2.718 2.745 1.073 6.018L4.4 8.6c.79-2.364 3-4.118 5.6-4.118"></path></svg>
                            </div>
                            <FaGithub onClick={handleGithubSignIn} className="btn btn-outline btn-circle text-black p-2"></FaGithub>
                            <FaFacebook onClick={handleFacebookSIgnIn} className="btn btn-outline btn-circle text-blue-500 p-2"></FaFacebook>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;