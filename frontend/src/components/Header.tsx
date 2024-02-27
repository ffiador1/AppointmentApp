//import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className=" bg-orange-400 py-6 ">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to="/">
                        FloLocs
                    </Link>
                </span>
                <span className="flex space-x-2">
                    <Link 
                        to="/booking" 
                        className="flex items-center text-white px-3 font-bold hover:bg-yellow-100 hover:text-orange-500">
                        BOOK
                    </Link>
                    <span className="flex space-x-2">
                    <Link 
                        to="/signin" 
                        className="flex items-center text-white px-3 font-bold hover:bg-yellow-100 hover:text-orange-500">
                        Sign in
                    </Link>
                </span>
                </span>     
            </div>
        </div>

    );
};

export default Header;