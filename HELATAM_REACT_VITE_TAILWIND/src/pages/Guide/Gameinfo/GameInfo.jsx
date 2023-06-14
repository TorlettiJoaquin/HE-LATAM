import { Footer } from "../../../constant/Footer";
import { Content } from "./Content/Content";
import { Header } from "./Header";

export const GameInfo = () => {
    return (
        <div className="relative w-full min-w-[1280px] max-w-[1920px] mx-auto my-0 bg-gameinfo-bg bg-no-repeat bg-[center_top_-45px] bg-[#060a0f] overflow-hidden flex flex-col">
            <Header />
            <Content />
            <Footer />
        </div>
    );
};
