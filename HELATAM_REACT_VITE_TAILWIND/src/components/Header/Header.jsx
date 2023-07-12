import { TopArticle } from "./TopArticle";
import { Slogan } from "./Slogan";
import { VideoBG } from "../../assets/video/hecomprimed.mp4"

export const Header = () => {
    return (
        <header className="-mt-28 w-full mx-auto my-0">
            <video src={VideoBG}></video>
            <Slogan />
            <TopArticle />
        </header>
    );
};
