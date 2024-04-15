import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
const Root = () => {
    return (
        <div>
            <div className='fixed top-0 z-10 w-full bg-white'>
                <NavBar />
            </div>
            <div className='mt-[87px] p-0 max-w-[1550px] mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;