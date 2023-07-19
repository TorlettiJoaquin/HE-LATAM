import data from '../../../constant/Heroes/HeroesData'

const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
        <div className='loop-slider' style={{
            '--duration': `${duration}ms`,
            '--direction': reverse ? 'reverse' : 'normal'
        }}>
            <div className='inner'>
                {children}
                {children}
            </div>
        </div>
    );
};

const Heroes = () => {
    return (
        <div className='heroes'>

            <div className='tag-list'>

                {[...new Array(ROWS)].map((_, i) => (
                    <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
                        {shuffle(data.HeroesData).slice(0, TAGS_PER_ROW).map(hero => (
                            <img src={`https://img6.99.com/yhkd/image/data/hero/head/${hero.id}.jpg`} key={hero.id} className='object-contain tag'/>
                        ))}
                    </InfiniteLoopSlider>
                ))}
                <div className='fade' />
            </div>
        </div>
    )
}

export default Heroes