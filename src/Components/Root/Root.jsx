import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";

import Navber from "../Header/Navber";



const Root = () => {
    return (
        
        <div className="md:mx-[10px] lg:mx-[135px]">
            
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;