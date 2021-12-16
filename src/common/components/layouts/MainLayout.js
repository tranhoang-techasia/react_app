import Navbar from "../base/Navbar";
import Sidebar from "../base/Sidebar";
import { useState } from 'react';
import {Outlet} from 'react-router-dom';

const  MainLayout = (props) => {
    const [showNav, setShowNav] = useState(true);
    const changeNavState = () => setShowNav(!showNav);

    return (
        <main className="d-flex">
            <Sidebar isShow={showNav} /> 
            <div className="content w-100">
                <Navbar onClickNavIcon={changeNavState} />  
                <div className="content-body px-3">
                    <Outlet />
                </div>
            </div>
        </main>

    );
}


export default MainLayout;