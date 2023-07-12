import Sound from 'react-sound';
import AudioBG from '../../assets/audio/audioBG.mp3'

export const Header = () => {
    return (
        <header className="relative -mt-20 w-full h-screen flex">
            <video src="/videos/hecomprimed2.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover -z-10" />
            <h1 className="absolute mr-[30%] pl-60 inset-0 flex items-center justify-center font-bold text-6xl z-10 uppercase tracking-widest leading-normal">Heroes Evolved <br />El primer juego en línea de batalla de héroes 5 vs 5</h1>
            <Sound
                url={AudioBG}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
                loop={true}
            />
        </header>
    );
};
