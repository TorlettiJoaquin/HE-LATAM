import { TopArticle } from "./TopArticle";
import { Slogan } from "./Slogan";
import { Navbar } from "../../constant/Navbar";

export const Header = () => {
    return (
        <header className="min-w-[1280px] max-w-[1920px] w-full  mx-auto my-0 relative overflow-hidden bg-header-bg bg-no-repeat">
            <div className="">
                <Navbar />
                <Slogan />
                <TopArticle />
            </div>
        </header>
    );
};
