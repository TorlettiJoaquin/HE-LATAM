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
                <div className="relative w-full h-full flex flex-col lg:flex-row justify-center items-center gap-10">
                    <div className="relative">
                        <a href="https://apps.apple.com/us/app/heroes-evolved/id1173388413"><img src={AppStore} alt="" className="w-3/4 mx-auto lg:hidden" /></a>
                        <img src={AppStore} alt="" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1} className="hidden lg:block" />
                        {showQR1 && (
                            <img src={QrAppStore} alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[40%] w-52 h-52 z-20 bg-white" />
                        )}
                    </div>
                    <div className="relative">
                        <a href="https://play.google.com/store/apps/details?id=com.rsg.heroesevolved"><img src={GooglePlay} alt="" className="w-3/4 mx-auto lg:hidden" /></a>
                        <img src={GooglePlay} alt="" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} className="hidden lg:block" />
                        {showQR2 && (
                            <img src={QrGooglePlay} alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[40%] w-52 h-52 z-20 bg-white" />
                        )}
                    </div>

                </div>
            </div>
            <div className="px-10 lg:px-0 py-10 text-center bg-footer-bg bg-no-repeat bg-center text-[#2882ff] drop-shadow-lg shadow-black shadow-xl">
                <p className="py-[6px]">Copyright © 2023 Mawel (Latam) Todos Los Derechos Reservados.</p>
                <p className="py-[6px]">Terms of Service | Privacy Policy | Contact Us | Official Website</p>
            </div>
        </div>
    );
};
