import AppStore from "../assets/images/appstore.webp";
import GooglePlay from "../assets/images/googleplay.webp";

export const Download = () => {
    return (
        <div className="w-full bg-gradient-to-t from-[#e7e6e4] to-[#e7e6e400] bg-opacity-50 h-44 lg:rounded-t-3xl">
            {/* CORREGIR w-full por w-screen arriba // bg-[#e7e6e4] // bg-[#e0bf64]*/}
            <div className="relative w-full h-full flex flex-col md:flex-row justify-center items-center gap-3 lg:gap-10 pt-5">
                <div className="">
                    <a href="https://apps.apple.com/us/app/heroes-evolved/id1173388413"><img src={AppStore} alt="" className="w-3/4 mx-auto" /></a>
                </div>
                <div className="">
                    <a href="https://play.google.com/store/apps/details?id=com.rsg.heroesevolved"><img src={GooglePlay} alt="" className="w-3/4 mx-auto" /></a>
                </div>
            </div>
        </div>
    )
}
