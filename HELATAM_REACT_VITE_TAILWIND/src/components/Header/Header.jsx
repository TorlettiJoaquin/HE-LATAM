// import AudioBG from '../../assets/audio/audioBG.mp3'

import AudioPlayer from "./AudioPlayer";

export const Header = () => {
    const audio = document.querySelector('audio');
    document.addEventListener('click', function() {
        audio.play()
        .then(() => {
            console.log('Audio played successfully');
        })
        .catch((error) => {
            console.log(`Error: ${error}`)
        })
    })


    return (
        <header className="relative -mt-24 w-full h-screen flex">
            <video src="/videos/hecomprimed2.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover -z-10" />
            <h1 className="absolute mr-[30%] pl-60 inset-0 flex items-center justify-center font-bold text-6xl z-10 uppercase tracking-widest leading-normal">Heroes Evolved <br />El primer juego en línea de batalla de héroes 5 vs 5</h1>
            <AudioPlayer/>
        </header>
    );
};