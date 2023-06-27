import { TopArticle } from "./TopArticle";
import { Slogan } from "./Slogan";

export const Header = () => {
    return (
        <header className="min-w-[1280px] max-w-[1920px] -mt-20 w-full mx-auto my-0 bg-header-bg bg-no-repeat">
            <Slogan />
            <TopArticle />
        </header>
    );
};
