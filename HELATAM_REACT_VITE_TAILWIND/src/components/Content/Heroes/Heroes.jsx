import data from '../../../constant/Heroes/HeroesData'

const DURATION = 120;
const ROWS = 5;
const TAGS_PER_ROW = 130;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
        <div className='loop-slider' style={{
            '--duration': `${duration}s`,
            '--direction': reverse ? 'reverse' : 'normal'
        }}>
            <div className='inner flex w-fit'>
                {children}
                {children}
            </div>
        </div>
    );
};

const Heroes = () => {
    return (
        <div className='relative'>
            <div className='flex justify-center pb-5 text-lg'>
                <h1 className='text-3xl xl:text-4xl font-extrabold tracking-widest bg-gradient-to-b from-orange-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-glow font-garamond px-5 py-3'>Elige tus HEROES INMORTALES</h1>
            </div>
            <div className='relative'>
                <div className='pb-10 md:py-10 w-[80%] mx-auto min-h-0 flex flex-col relative overflow-hidden gap-4'>
                    {[...new Array(ROWS)].map((_, i) => (
                        <InfiniteLoopSlider key={i} duration={random(DURATION - 5, DURATION + 5)} reverse={i % 2}>
                            {shuffle(data.HeroesData).slice(0, TAGS_PER_ROW).map(hero => (
                                <img src={`https://img6.99.com/yhkd/image/data/hero/head/${hero.id}.jpg`} key={hero.id} className='object-contain flex items-center gap-[0 0.2rem] h-28 md:h-36 rounded-xl mr-4 shadow-[0_0.1rem_0.2rem_#000]' />
                            ))}
                        </InfiniteLoopSlider>
                    ))}
                    {/* <div className='fade' /> */}
                </div>
                <div className="absolute right-0 top-0 left-0 bottom-0 h-full w-[85%] mx-auto bg-gradient-to-r from-black via-transparent to-black" />
            </div>


        </div>

    )
}

export default Heroes