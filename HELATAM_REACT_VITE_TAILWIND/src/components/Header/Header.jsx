import News from "../Content/News/News";

export const Header = () => {


    return (
        <header className="relative -mt-24 w-full h-screen flex -mb-[90px]">
            <h1 className="absolute w-[70%] pb-48 mx-auto inset-0 flex items-center text-center justify-center font-semibold font-garamond text-[70px] z-10 uppercase tracking-widest leading-relaxed drop-shadow-glow">« Heroes Evolved <br />El primer juego en línea de batalla de héroes 5 vs 5 »</h1>
            <News/>
            <video src="/videos/hecomprimed2.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover -z-10" />
        </header>
    );
};