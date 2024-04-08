import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

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

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-secondary">
                Login
            </button>
        </div>
    );
};

export default Login;