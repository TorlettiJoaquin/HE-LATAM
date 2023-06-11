import { TopArticle } from "../components/TopArticle";
import { Slogan } from "../components/slogan";
import { Navbar } from "../constant/Navbar";

export const Header = () => {
    return (
        <header className="min-w-[1280px] max-w-[1920px] w-full  mx-auto my-0 pt-10 relative overflow-hidden bg-header-bg bg-no-repeat">
            <div className="">
                <Navbar />
                <Slogan />
                <TopArticle />
            </div>
        </header>
    );
};
