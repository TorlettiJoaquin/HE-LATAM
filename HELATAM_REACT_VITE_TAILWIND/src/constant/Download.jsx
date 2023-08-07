import AppStore from "../assets/images/appstore.webp";
import GooglePlay from "../assets/images/googleplay.webp";

export const Download = () => {
    return (
        <div className="w-screen bg-[#e0bf64] h-44 rounded-t-3xl p-6">
            <div className="relative w-full h-full flex flex-col justify-center items-center gap-6 lg:gap-10">
                <div className="">
                    <a href="https://apps.apple.com/us/app/heroes-evolved/id1173388413"><img src={AppStore} alt="" className="w-3/4 mx-auto"/></a>
                </div>
                <div className="">
                    <a href="https://play.google.com/store/apps/details?id=com.rsg.heroesevolved"><img src={GooglePlay} alt="" className="w-3/4 mx-auto"/></a>
                </div>
            </div>
        </div>
    )
}
