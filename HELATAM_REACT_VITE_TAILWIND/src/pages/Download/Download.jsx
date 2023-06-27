import { Footer } from "../../constant/Footer";
import { Navbar } from "../../constant/Navbar";
import { Content } from "./Content/Content";

export const Download = () => {
    return (
        <div className="w-full min-w-[1280px] max-w-[1920px] h-screen mx-auto my-0 bg-newbg-bg bg-no-repeat bg-[center_top] bg-[#060a0f] bg-fixed flex flex-col">
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
};
