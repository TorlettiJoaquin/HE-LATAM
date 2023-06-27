import { TbDownload } from "react-icons/tb";
import AppStore from "../../../assets/images/appstore.webp";
import GooglePlay from "../../../assets/images/googleplay.webp";

export const Content = () => {
    return (
        <section className="min-w-[1280px] max-w-[1920px] w-full mx-auto my-0 relative pb-24">
            <div className="w-[1280px] mx-auto my-0">
                <div className="py-[10%]">
                    <section className="relative float-left w-full mx-7 text-[#bbcace] bg-[#0f2b55] p-8 border-t-8 border-t-[#420398] rounded-2xl">
                        <h1 className="leading-10 text-white text-4xl font-bold uppercase text-center">
                            <TbDownload className="relative inline-block bottom-1 mr-4" />{" "}
                            Descarga el juego
                        </h1>
                        <div className="relative p-20 flex gap-10 justify-center ">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.rsg.heroesevolved"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:scale-110 transform transition-all ease-linear duration-200"
                            >
                                <img src={AppStore} alt="" />
                            </a>
                            <a
                                href="https://apps.apple.com/us/app/id1173388413"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:scale-110 transform transition-all ease-linear duration-200"
                            >
                                <img src={GooglePlay} alt="" />
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};
