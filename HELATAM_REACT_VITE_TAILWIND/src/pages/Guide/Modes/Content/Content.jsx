import { Aside } from "../../../../constant/Aside/Aside";
import modes from "../../../../assets/images/modes.webp";

export const Content = () => {
    return (
        <section className="min-w-[1280px] max-w-[1920px] w-full mx-auto my-0 relative pb-24">
            <div className="w-[1280px] mx-auto my-0">
                <div className="py-[10%]">
                    <section className="relative float-left w-8/12 mx-7 text-[#bbcace] bg-[#0f2b55] p-8 border-t-8 border-t-[#420398] ">
                        <h1 className="leading-10 text-white text-4xl font-bold uppercase">
                            Modos de juego
                        </h1>
                        <p className="text-[#9d9d9d] py-5">04/13/2020</p>
                        <p className="pb-6">
                            Únete a un modo de juego de acción PVP masiva con
                            5v5, 3v3, 1v1, incluso modo personalizado y otros
                            modos de batalla multijugador como el auto-ajedrez,
                            ¡para ascender en las clasificaciones, ganar
                            abundantes recompensas y conquistar el campo de
                            batalla con tu estrategia!
                        </p>
                        <p className="pb-6">
                            El combate en Heroes Evolved tiene lugar en campos
                            de batalla designados, cada mapa moldeando el flujo
                            de la batalla. Familiarízate con cada mapa y
                            descubre sus secretos estratégicos.
                        </p>
                        <p className="pb-6">· Altar del Conflicto ·</p>
                        <p className="pb-6">
                            Este campo de batalla es el enfoque principal de
                            todos los conflictos en el mundo de Heroes Evolved.
                            Reúne a tus aliados y enfréntate en intensas
                            partidas 5v5 en este icónico mapa. Con tres líneas,
                            una jungla vasta y un río que divide, el Altar del
                            Conflicto ofrece un amplio espacio para una
                            jugabilidad estratégica compleja.
                        </p>
                        <p className="pb-6">· Valle de la Guerra ·</p>
                        <p className="pb-6">
                            Un mapa mucho más directo, que consiste en una sola
                            línea. Este campo de batalla ofrece acción
                            instantánea, enfrentando a dos equipos de 5 Héroes
                            elegidos al azar en la prueba definitiva de
                            habilidad y reflejos.
                        </p>
                        <img src={modes} alt="" className="pb-10"/>
                    </section>
                    <Aside />
                </div>
            </div>
        </section>
    );
};
