import { Download } from "../../constant/Download";
import News from "../Content/News/News";

export const Header = () => {


    return (
        <header className="flex flex-col w-full h-screen relative lg:flex-row lg:mb-[-55px] ">
            <h1 className="flex items-center text-center justify-center absolute pb-48 px-6 mx-auto inset-0 font-semibold font-garamond lg:w-[85%] 2xl:w-[70%] text-2xl lg:text-[50px] 2xl:text-[70px] z-10 uppercase tracking-widest lg:leading-relaxed drop-shadow-glow">« Heroes Evolved »<br />El primer juego en línea de batalla de héroes 5 vs 5</h1>
            <div className="hidden lg:block w-full">
                <News />
            </div>
            <div className="absolute bottom-0 lg:hidden w-full">
                <Download />
            </div>
            <video src="/videos/hewithaudio.webm" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover object-center -z-10" />
        </header>
    );
};