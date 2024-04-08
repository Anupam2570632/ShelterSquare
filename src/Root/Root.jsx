import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
const Root = () => {
    return (
        <div>
            <div className='fixed top-0 z-10 w-full'>
                <NavBar />
            </div>
            <div className='mt-24'>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;