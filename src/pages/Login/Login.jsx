import { AuthContext } from "../../AuthProvider/AuthProvider";

import {
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const { GoogleSignIn } = useContext(AuthContext)


    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleSignIn = e => {
        e.preventDefault()
        console.log('log i b')

    }

    return (
        <div className="h-[640px] bg-base-200 w-screen flex items-center justify-center">
            <form onSubmit={handleSignIn} className="w-96 mx-auto">
                <CardHeader
                    variant="gradient"
                    color="gray"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Log In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input name="email" required label="Email" type="email" size="lg" />
                    <Input name="password" required label="Password" type="password" size="lg" />
                    <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button type="submit" variant="gradient" fullWidth>
                        Log In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don&apos;t have an account?
                        <Link
                            as="a"
                            to={'/register'}
                            variant="small"
                            color="blue-gray"
                            className="ml-1 font-bold"
                        >
                            Register
                        </Link>
                    </Typography>
                </CardFooter>
            </form>
        </div>
    );
};

export default Login;