import { Aside } from "../../../../constant/Aside/Aside";

export const Content = () => {
    return (
        <section className="min-w-[1280px] max-w-[1920px] w-full mx-auto my-0 relative pb-24">
            <div className="w-[1280px] mx-auto my-0">
                <div className="py-[10%]">
                    <section className="relative float-left w-8/12 mx-7 text-[#bbcace] bg-[#0f2b55] p-8 border-t-8 border-t-[#420398] ">
                        <h1 className="leading-10 text-white text-4xl font-bold uppercase">
                            GAME MODES
                        </h1>
                        <p className="text-[#9d9d9d] py-5">04/13/2020</p>
                        <p className="pb-6">
                            Join massive PVP action game mode with 5v5, 3v3,
                            1v1, even custom mode and other multiplayer battle
                            modes such as auto-chess, to climb rankings to win
                            abundant rewards and conquer the battlefield with
                            your strategy!
                        </p>
                        <p className="pb-6">
                            Combat in Heroes Evolved takes place on designated
                            battlefields, each map shaping the flow of battle.
                            Familiarize yourself with each map, and uncover
                            their strategic secrets.
                        </p>
                        <p className="pb-6">· Altar of Strife ·</p>
                        <p className="pb-6">
                            This battlefield is the primary focus of all
                            conflict in the world of Heroes Evolved. Assemble
                            your allies, and face off in intense 5v5 matches on
                            this iconic map. Featuring three lanes, a vast
                            jungle, and a dividing river, the Altar of Strife
                            has ample room for complex strategic gameplay.
                        </p>
                        <p className="pb-6">· Valley of War ·</p>
                        <p className="pb-6">
                            A much more straightforward map, consisting only of
                            a single lane. This battlefield brings
                            instant-action to the table, pitting two teams of 5
                            randomly chosen Heroes against each other in the
                            ultimate test of skill and reflexes./
                        </p>
                        <img src="" alt="" />
                    </section>
                    <Aside />
                </div>
            </div>
        </section>
    );
};
