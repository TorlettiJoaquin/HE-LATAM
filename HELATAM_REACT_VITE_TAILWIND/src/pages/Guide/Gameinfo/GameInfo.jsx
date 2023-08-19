import { Footer } from "../../../constant/Footer";
import { Navbar } from "../../../constant/Navbar";
import { Content } from "./Content/Content";

export const GameInfo = () => {
    return (
        <div className="bg-gameinfo-bg bg-no-repeat bg-[center_top_-230px] md:bg-[center_top_-150px] bg-[#080b16] flex flex-col">
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
};
