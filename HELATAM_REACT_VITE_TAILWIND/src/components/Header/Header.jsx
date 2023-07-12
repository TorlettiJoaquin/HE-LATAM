import { Slogan } from "./Slogan";

export const Header = () => {
    return (
        <header className="-mt-28 w-full mx-auto my-0">
            <video src="/videos/hecomprimed.mp4" autoPlay loop muted/>
            <Slogan />
        </header>
    );
};
