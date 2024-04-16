import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const NavBar = () => {
    const { user, logOut, reload } = useContext(AuthContext)
    const [profileImage, setProfileImage] = useState(user?.photoURL)
    const [profileName, setProfileName] = useState(user?.displayName ? user.displayName : 'name not found')

    useEffect(() => {
        setProfileImage(user?.photoURL)
        setProfileName(user?.displayName ? user.displayName : 'name not found')
        console.log(profileImage, profileName)
        console.log('i am changed')
    }, [reload])

    const handleLogOut = () => {
        logOut()
            .then(
                toast.success('Log out successfully')
            )
            .catch()
    }

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/update-profile'}>Update Profile</NavLink></li>
        <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
    </>


    return (
        <div className="navbar max-w-[1600px] mx-auto flex items-center bg-base-100 py-4 w-11/12 md:w-[85%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-[250px]">
                        {links}
                        {
                            user &&
                            <li className="pt-2">
                                <div className="">
                                    <hr />
                                    <div className="flex items-center justify-center gap-2 pr-4">
                                        <img className="w-10 rounded-full" src={profileImage} alt="" />
                                        <div>
                                            <h2 className="font-bold text-[#131313]">{profileName}</h2>
                                            <p>{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        }
                    </ul>
                </div>
                <Link to={'/'}>
                    <h2 className="font-bold text-[#131313] text-3xl p-0">Shelter<span className="text-cyan-500">Square</span></h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center justify-center gap-4">
                            <div data-tip={user.displayName} className="hidden md:block hover:tooltip hover:tooltip-bottom z-10">
                                <div role="button" className=" btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full flex items-center justify-center">
                                        <img alt="user" src={user.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn btn-secondary">
                                Log Out
                            </button>
                        </div>
                        :
                        <Link to={'/login'}>
                            <button className="btn btn-secondary">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;