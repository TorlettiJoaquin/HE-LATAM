import { Aside } from "../../../../constant/Aside/Aside";
import modes from "../../../../assets/images/modes.webp";

export const Content = () => {
    return (
        <section className="min-w-[1280px] max-w-[1920px] w-full mx-auto my-0 relative pb-24">
            <div className="w-[1280px] mx-auto my-0">
                <div className="py-[10%]">
                    <section className="relative float-left w-8/12 mx-7 text-[#bbcace] bg-[#0f2b55] p-8 border-t-8 border-t-[#420398] rounded-lg">
                        <h1 className="leading-10 text-white text-4xl font-bold uppercase">
                            Modos de juego
                        </h1>
                        <p className="text-[#9d9d9d] py-5">04/13/2020</p>
                        <p className="pb-6">
                            Únete a un juego de acción con modos de juego 5v5,
                            3v3, 1v1, incluso modos personalizados y otros modos
                            de batalla multijugador como auto-chess. ¡Asciende
                            en rangos para ganar recompensas abundantes y
                            conquistar la batalla con tu estrategia!
                        </p>
                        <p className="pb-6">
                            El combate en Heroes Evolved toma lugar en campos de
                            batalla designados, cada uno le da forma al flujo de
                            la batalla. Familiarízate con cada mapa y descubre
                            sus estrategias secretas.
                        </p>
                        <p className="pb-6">· Altar de la Lucha ·</p>
                        <p className="pb-6">
                            Este escenario es el principal de todo conflicto en
                            el mundo de Heroes Evolved. Reúne a tus aliados y
                            enfrenta intentas batallas 5v5 en este mapa icónico.
                            Presentando tres líneas, una amplia jungla y un río
                            divisor. El Altar de la Lucha tiene un amplio
                            espacio para juegos de estrategia complejos.
                        </p>
                        <p className="pb-6">· Valle de la Guerra ·</p>
                        <p className="pb-6">
                            Es un mapa más directo, consiste en un único carril.
                            Este campo de batalla tiene más acción instantánea,
                            poniendo a combatir dos equipos de 5 héroes
                            aleatorios en la prueba máxima de habilidad y
                            reflejos.
                        </p>
                        <img src={modes} alt="" className="pb-10" />
                    </section>
                    <Aside />
                </div>
            </div>
        </section>
    );
};
