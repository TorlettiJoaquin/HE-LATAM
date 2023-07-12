import { Slogan } from "./Slogan";

export const Header = () => {
    return (
        <header className="-mt-20 w-full h-screen">
            <video src="/videos/hecomprimed.mp4" autoPlay loop muted className="absolute w-full h-full object-cover"/>
            <Slogan />
        </header>
    );
};
