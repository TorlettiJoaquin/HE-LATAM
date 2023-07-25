import { useState } from "react";
import AppStore from "../assets/images/appstore.webp";
import GooglePlay from "../assets/images/googleplay.webp";
import QrAppStore from "../assets/images/appstore.png";
import QrGooglePlay from "../assets/images/googleplay.png";

export const Footer = () => {
    const [showQR1, setShowQR1] = useState(false)
    const [showQR2, setShowQR2] = useState(false)
    const handleMouseOver1 = () => {
        setShowQR1(true)
    }
    const handleMouseOut1 = () => {
        setTimeout(() => {
            setShowQR1(false)
        }, 1000);
    }

    const handleMouseOver2 = () => {
        setTimeout(() => {
            setShowQR2(true)
        }, 1000);
    }
    const handleMouseOut2 = () => {
        setShowQR2(false)
    }

    return (
        <div className="">
            <div className="w-full bg-[#e0bf64] h-60">
                <div className="relative w-full h-full flex justify-center items-center gap-10">
                    <div className="relative">
                        <img src={AppStore} alt="" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1} />
                        {showQR1 && (
                            <img src={QrAppStore} alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[40%] w-52 h-52 z-20 bg-white" />
                        )}
                    </div>
                    <div className="relative">
                        <img src={GooglePlay} alt="" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} />
                        {showQR2 && (
                            <img src={QrGooglePlay} alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[40%] w-52 h-52 z-20 bg-white" />
                        )}
                    </div>

                </div>
            </div>
            <div className="py-10 text-center bg-footer-bg bg-no-repeat bg-center text-[#2882ff] drop-shadow-lg shadow-black shadow-xl">
                <p className="py-[6px]">Copyright © 2023 Mawel (Latam) Todos Los Derechos Reservados.</p>
                <p className="py-[6px]">Terms of Service | Privacy Policy | Contact Us | Official Website</p>
            </div>
        </div>
    );
};
