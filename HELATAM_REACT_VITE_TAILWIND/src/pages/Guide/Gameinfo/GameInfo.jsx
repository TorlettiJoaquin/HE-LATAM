import { Footer } from "../../../constant/Footer";
import { Navbar } from "../../../constant/Navbar";
import { Content } from "./Content/Content";

export const GameInfo = () => {
    return (
        <div className="bg-newbg-bg bg-no-repeat bg-top bg-fixed bg-[#080b16] flex flex-col">
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
};
