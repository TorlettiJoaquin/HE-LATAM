import { Aside } from "../../../../constant/Aside/Aside";

export const Content = () => {
    return (
        <section className="min-w-[1280px] max-w-[1920px] w-full mx-auto my-0 relative pb-24">
            <div className="w-[1280px] mx-auto my-0">
                <div className="py-[10%]">
                    <section className="relative float-left w-8/12 mx-7 text-[#bbcace] bg-[#0f2b55] p-8 border-t-8 border-t-[#420398] ">
                        <h1 className="leading-10 text-white text-4xl font-bold uppercase">
                            HEROES EVOLVED TERMINOLOGY
                        </h1>
                        <p className="text-[#9d9d9d] py-5">08/23/2021</p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Top Laner:
                        </h2>
                        <p className="pb-6">
                            Top laner refers to the hero who defends the top
                            lane on his own. Different from some MOBA games on
                            PC, Heroes Evolved has the top and bottom lanes
                            reversed for the two sides, which makes your top
                            laner play against enemy ADC and Support in their
                            bot lane. Thus, Top laners need to have high
                            survivability and resistance.
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Top Laner:
                        </h2>
                        <p className="pb-6">
                            Mid laner is the hero, usually a Mage, who guards
                            the middle lane on his own. Mid laners can develop
                            faster by farming a lane of enemy troops and are
                            expected to significantly contribute to teamfights
                            in late game.
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Last Hit:
                        </h2>
                        <p className="pb-6">
                            Killing troops brings Gold and experience. Last
                            hitting means you use basic attacks, abilities, or
                            equipment to make the killing blow on enemy troops.
                            There are bonus rewards for last hitting.
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Buff:
                        </h2>
                        <p className="pb-6">
                            It’s a positive effect applied to a hero and usually
                            obtained from monsters like Zakar in Heroes Evolved.
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Counter Jungle:
                        </h2>
                        <p className="pb-6">
                            To slay monsters in the enemy’s side of the jungle,
                            depriving the enemy team of buffs, Gold, and
                            experience.
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Counter Kill:
                        </h2>
                        <p className="pb-6">
                            A hero with advantages over his enemy is
                            unexpectedly killed by this enemy.
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Growth:
                        </h2>
                        <p className="pb-6">
                            To collect Gold and experience by killing jungle
                            monsters and enemy troops. Growing your hero is the
                            most important thing before you build a set of
                            max-level gears, as well as the key to win in
                            teamfights.
                        </p>
                    </section>
                    <Aside />
                </div>
            </div>
        </section>
    );
};
