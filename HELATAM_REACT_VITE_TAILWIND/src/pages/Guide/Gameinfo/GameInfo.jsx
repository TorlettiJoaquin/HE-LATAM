import { Footer } from "../../../constant/Footer";
import { Navbar } from "../../../constant/Navbar";
import { Content } from "./Content/Content";

export const GameInfo = () => {
    return (
        <div className="w-full min-w-[1280px] max-w-[1920px] mx-auto my-0 bg-gameinfo-bg bg-no-repeat bg-[center_top_-45px] bg-[#060a0f] flex flex-col">
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
};
