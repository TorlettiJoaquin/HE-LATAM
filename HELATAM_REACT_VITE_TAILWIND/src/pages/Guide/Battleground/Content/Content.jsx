import map1 from "../../../../assets/images/map1.webp";
import map2 from "../../../../assets/images/map2.webp";
import map3 from "../../../../assets/images/map3.webp";

export const Content = () => {
    return (
        <section className="min-w-[1280px] max-w-[1920px] w-full mx-auto my-0 relative pb-10">
            <div className="w-[1300px] mx-auto my-0">
                <div className="h-[520px] p-[175px_0_0_52%]">
                    <h1 className="w-0 h-0 hidden">Campo de batalla</h1>
                    <h3 className="text-[32px] py-[30px] w-[600px]">
                        ALTAR DE LA LUCHA
                    </h3>
                    <p className="w-[85%]">
                        Este campo de batalla es el principal centro de todo
                        conflicto en el mundo de Heroes Evolved. Reúne a tus
                        aliados y enfrenta batallas 5 vs 5 en este mapa icónico.
                        Presentando tres líneas, una enorme jungla y un río que
                        divide el mapa. El Altar de la Lucha tiene un amplio
                        espacio para jugar complejas estrategias.
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
                                CÓMO GANAR:
                            </strong>
                            Destruye la Égida ubicada en el centro de la base
                            enemiga.
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                RUTA DE ATAQUE:
                            </strong>
                            Ataca desde 3 líneas y destruye las torres en orden.
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                Minions:
                            </strong>
                            Guerreros, hechiceros y cañones. Ellos se volveran
                            mas poderosos despues de que caigan todas las torres
                            enemigas.
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                Heroes:
                            </strong>
                            Se pueden utilizar todos los héroes y las
                            apariencias. Nivel inicial del héroe: 1.
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                Items:
                            </strong>
                            Todos los ítems pueden ser utilizados. Oro inicial:
                            700. Efecto de las pociones: 100%
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                Items Activos:
                            </strong>
                            Los regalos de batalla pueden ser utilizados.
                        </p>
                        <p>
                            <strong className="mr-[8px] text-[#2a83ff] uppercase">
                                MONSTRUOS DE LA JUNGLA:
                            </strong>
                            Monstruos comunes, el Protector del Bosque y Zakar,
                            el jefe. Matar al Protector del Bosque otorga un
                            buff aleatorio de ataque, defensa, oro o velocidad
                            de movimiento. Matar a Zakar otorga oro y un
                            poderoso buff a todos los héroes del equipo.
                        </p>
                    </div>
                    <div className="h-[92px] leading-[92px] text-[38px] text-center uppercase ">
                        <h3 className="drop-shadow-glow">
                            GUÍA DEL CAMPO DE BATALLA
                        </h3>
                    </div>
                    <div className="w-[85%] leading-[26px] my-0 mx-auto pb-[100px]">
                        <div className="py-[50px] flex flex-row items-center">
                            <img
                                src={map1}
                                alt=""
                                className="mr-[20px] border-2 border-blue-500"
                            />
                            <p className="w-1/2 ">
                                Las líneas son el camino que siguen las tropas
                                para atacar en el juego. Tus tropas atacarán
                                desde tres líneas azules y el enemigo
                                contraatacará desde las tres líneas rojas. El
                                altar del caos tiene tres líneas (izquierda). El
                                Altar del Caos tiene tres líneas (izquierda,
                                medio y derecha) las cuales son defendidas por
                                tres torres. La línea de la derecha presenta más
                                ventajas en comparación con la izquierda. En el
                                equipo rival es al revés, ya que están
                                invertidas. Las torres con la mayor ventaja se
                                encuentran en el medio de los dos lados,
                                teniendo más facilidad para afectar la situación
                                del combate, mientras que las torres más
                                alejadas del centro tienden a ser las más
                                vulnerables.
                            </p>
                        </div>
                        <div className="py-[50px] flex flex-row-reverse items-center">
                            <img
                                src={map2}
                                alt=""
                                className="ml-[20px] border-2 border-blue-500 w-[450px]"
                            />
                            <div className="">
                                <h3>
                                    FUNCIONES Y CARACTERÍSTICAS DE LAS TORRES
                                </h3>
                                <p>
                                    1. Destruir las torres otorga oro y
                                    experiencia a tu equipo.
                                    <br />
                                    2. Las torres infligen mucho daño y son una
                                    defensa muy poderosa.
                                    <br />
                                    3. Permiten descubrir a los enemigos
                                    invisibles y las trampas.
                                    <br />
                                    4. Se pueden usar como punto de
                                    teletransportación.
                                    <br />
                                    5. La torre ubicada en el medio es muy
                                    importante. Si se pierde muy rápido, el
                                    enemigo no tardará en controlar el mapa.
                                    <br />
                                    6. Al principio de la partida, las torres
                                    son una excelente cobertura para evitar el
                                    peligro.
                                    <br />
                                    7. En el juego medio (mid game) y en el
                                    tardío (late game) las torres no son una
                                    protección infalible, ya que los enemigos
                                    con un equipamiento elevado pueden matarte
                                    rápidamente incluso debajo de la torre.
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
                                <h3>
                                    FUNCIONES Y CARACTERÍSTICAS DE LAS LÍNEAS
                                </h3>
                                <p>
                                    1. La línea favorecida es relativamente
                                    segura. Se sugiere que los heroes con buen
                                    farmeo de oro tomen esta línea.
                                    <br />
                                    2. Por el contrario, se recomienda que los
                                    héroes con alta resistencia y capacidades
                                    defensivas ocupen la línea más débil.
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
