import News from "../Content/News/News";

export const Header = () => {


    return (
        <header className="lg:relative flex lg:-mt-24 w-full h-screen lg:-mb-[90px]">
            <h1 className="flex items-center text-center justify-center absolute lg:w-[70%] pb-48 px-6 mx-auto inset-0 font-semibold font-garamond text-2xl lg:text-[70px] z-10 uppercase tracking-widest lg:leading-relaxed drop-shadow-glow">« Heroes Evolved »<br />El primer juego en línea de batalla de héroes 5 vs 5</h1>
            <News/>
            <video src="/videos/videoplayback.webm" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover object-center -z-10" />
        </header>
    );
};