import map1 from "../../../../assets/images/map1.webp";
import map2 from "../../../../assets/images/map2.webp";
import map3 from "../../../../assets/images/map3.webp";

export const Content = () => {
    return (
        <section className="min-w-[1280px] max-w-[1920px] w-full mx-auto my-0 relative pb-10">
            <div className="w-[1300px] mx-auto my-0">
                <div className="h-[520px] p-[175px_0_0_52%]">
                    <h1 className="w-0 h-0 hidden">Battleground</h1>
                    <h3 className="text-[32px] py-[30px] w-[600px]">
                        Altar of Strife
                    </h3>
                    <p className="w-[85%]">
                        This battleground is the primary focus of all conflict
                        in the world of Heroes Evolved. Assemble your allies,
                        and face off in intense 5v5 matches on this iconic map.
                        Featuring three lanes, a vast jungle, and a dividing
                        river, the Altar of Strife has ample room for complex
                        strategic gameplay.
                    </p>
                </div>
                <div className="pt-[3%]">
                    <div className="h-[92px] leading-[92px] text-[38px] text-center uppercase ">
                        <h3 className="drop-shadow-glow">Descripcion</h3>
                    </div>
                    <div className="h-[800px]"></div>
                    <div className="leading-[40px] w-[85%] mx-auto my-0 pb-[100px]">
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                How to Win:
                            </strong>
                            Destroy the Aegis in the middle of enemies&apos;
                            base.
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                Attack Route:
                            </strong>
                            Attack from 3 lanes. Destroy turrets in order.
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                Minions:
                            </strong>
                            Warrior, Wizard and Cannons. They will get more
                            powerful after the enemy barracks are destroyed.
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                Heroes:
                            </strong>
                            All heroes and skins can be used. Initial Level of
                            Hero: 1.
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                Items:
                            </strong>
                            All items can be used. Initial Gold: 700. Potion
                            Effect: 100%.
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                Bonus Attribute:
                            </strong>
                            Battle Gifts can be used.
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                Jungle Monsters:
                            </strong>
                            common monsters, Forest Protector and Zakar, the
                            boss. Killing the Forest Protector will bring a
                            random temporary buff of attack, defense, Gold or
                            movement speed. Killing the boss will bring Gold and
                            a powerful buff to all heroes.
                        </p>
                    </div>
                    <div className="h-[92px] leading-[92px] text-[38px] text-center uppercase ">
                        <h3 className="drop-shadow-glow">Battleground guide</h3>
                    </div>
                    <div className="w-[85%] leading-[26px] my-0 mx-auto pb-[100px]">
                        <div className="py-[50px] flex flex-row items-center">
                            <img
                                src={map1}
                                alt=""
                                className="mr-[20px] border-2 border-blue-500"
                            />
                            <p className="w-1/2 ">
                                Lanes are the paths that minions take to attack
                                in the game. As shown above, your minions will
                                attack enemies from three blue lanes and enemy
                                minions will take three red lanes to fight back.
                                Altar of Chaos has three lanes (left, middle and
                                right), which are defended by three turrets. The
                                right lane is your advantaged lane and the left
                                lane is your disadvantaged lane. For your enemy,
                                the left one is the advantaged lane and the
                                right one is the disadvantaged lane. The turret
                                on the advantaged lane is in the middle of the
                                two sides, making it easier to affect the war
                                situation, while the turret on the disadvantaged
                                lane is far away from the middle position.
                            </p>
                        </div>
                        <div className="py-[50px] flex flex-row-reverse items-center">
                            <img
                                src={map2}
                                alt=""
                                className="ml-[20px] border-2 border-blue-500 w-[450px]"
                            />
                            <div className="">
                                <h3>FUNCTIONS AND FEATURES OF TURRETS</h3>
                                <p>
                                    1. Destroying turrets will bring Gold and
                                    EXP to your team.
                                    <br />
                                    2. Turrets can inflict greater damage and
                                    provide stronger defense.
                                    <br />
                                    3. Turrets allow your team to discover the
                                    invisible enemies and traps.
                                    <br />
                                    4. Heroes can be teleported to turrets.
                                    <br />
                                    5. The turret in the middle lane is very
                                    important. If you lose it too early, your
                                    enemy will control the whole map in no time.
                                    <br />
                                    6. Its wise to stay under the turrets to
                                    avoid danger at the beginning.
                                    <br />
                                    7. It wont be safe to stay under the turrets
                                    in the middle or later stage, because
                                    enemies with strengthened equipment are able
                                    to kill you under the attack of the turrets.
                                </p>
                            </div>
                        </div>
                        <div className="py-[50px] flex flex-row-reverse items-center">
                            <img
                                src={map3}
                                alt=""
                                className="ml-[20px] border-2 border-blue-500 w-[450px]"
                            />
                            <div className="">
                                <h3>FUNCTIONS AND FEATURES OF LANES</h3>
                                <p>
                                    1. The advantaged lane is relatively safer.
                                    It is suggested that heroes with good Gold
                                    farming ability take the advantaged lane.
                                    <br />
                                    2. On the contrary, heroes with high HP or
                                    defense should take the disadvantaged lane.
                                    <br />
                                    3. Heroes with advanced Gift can teleport to
                                    minions. Don’t miss the chance to teleport
                                    to defend unguarded turrets, harvest Gold or
                                    take down enemy turrets with minions.
                                    <br />
                                    4. If enemies are too far away from your
                                    turret of the advantaged lane, you can
                                    attack the nearest monsters to attract them
                                    to face your minions.
                                    <br />
                                    5. At the beginning, it’s suggested to
                                    control the lanes and keep your minions away
                                    from the attack range of the enemy turrets.
                                    At the middle and later stage, try you best
                                    to oppress enemy turrets with minions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
