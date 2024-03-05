//import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" bg-orange-400 py-10">
            <div className="container mx-auto flex justify-between items-scenter">
                <span className="text-3xl text-white font-bold tracking-tight">
                 FloLocs.com 
                </span>
                <span className="text-white font-bold tracking-tight flex gap-4">
                    <p className="cursor-pointer">Privacy Policy</p>
                    <Link to="/terms">Terms of Service
                    </Link>
                </span>
            </div>
        </div>

    );
};

export default Footer;