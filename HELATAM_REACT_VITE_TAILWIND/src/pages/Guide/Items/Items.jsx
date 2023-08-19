import { Footer } from "../../../constant/Footer";
import { Navbar } from "../../../constant/Navbar";
import { Content } from "./Content/Content";

export const Items = () => {
    return (
        <div className="w-full bg-newbg-bg bg-no-repeat bg-fixed bg-center flex flex-col">
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
};
