import { Footer } from "../../../constant/Footer";
import { Content } from "./Content/Content";
import { Header } from "./Header";

export const Items = () => {
    return (
        <div className="relative w-full min-w-[1280px] max-w-[1920px] mx-auto my-0 bg-item-bg bg-no-repeat bg-[center_top] bg-[#060a0f] overflow-hidden flex flex-col">
            <Header />
            <Content />
            <Footer />
        </div>
    );
};
