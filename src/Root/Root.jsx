import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import 'animate.css';
import { useEffect } from 'react';



const Root = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init();
    }, []);

    useEffect(() => {
        // Scroll to top whenever location changes
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className='overflow-hidden'>
            <div className='fixed top-0 z-10 w-full bg-white'>
                <NavBar />
            </div>
            <div className='mt-[87px] p-0 max-w-[1550px] mx-auto'>
                <Outlet />
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Root;