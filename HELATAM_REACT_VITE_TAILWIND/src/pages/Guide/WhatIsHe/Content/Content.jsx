import wih1 from "../../../../assets/images/wih1.webp";
import wih2 from "../../../../assets/images/wih2.webp";
import wih3 from "../../../../assets/images/wih3.webp";
import { Aside } from "../../../../constant/Aside/Aside";

export const Content = () => {
    return (
        <section className="flex justify-center">
            <section className="max-w-screen-lg p-10 rounded-xl backdrop-blur-3xl m-5">
                <h1 className="py-5 leading-10 text-white text-4xl font-normal uppercase">
                    ¿QUÉ ES HEROES EVOLVED?
                </h1>
                <p className="py-4">
                    Heroes Evolved es un juego de acción y estrategia
                    gratuito que te desafía a ser parte de un equipo de
                    5 contra 5 y destruir la base enemiga. Este es un
                    MOBA realmente divertido en el que hay más de 100
                    héroes únicos para elegir en una lucha contra
                    rivales reales de todo el mundo. Puedes aprovechar
                    al máximo tus habilidades, trabajo en equipo,
                    inteligencia y estrategia para sobrevivir y triunfar
                    en el juego.
                </p>
                <p className="py-4">
                    Los jugadores seleccionan de entre una enorme lista
                    de personajes, cada uno con sus propias habilidades
                    y atributos únicos. ¡Gana oro, sube de nivel y
                    adquiere poderoso equipamiento mientras te coordinas
                    con tu equipo, equilibrando la defensa y la ofensiva
                    en el camino hacia la victoria!
                </p>
                <img
                    src={wih1}
                    alt=""
                    className="w-[620px] border border-blue-400 max-w-full h-auto m-auto my-8"
                />
                <img
                    src={wih2}
                    alt=""
                    className="w-[620px] border border-blue-400 max-w-full h-auto m-auto my-8"
                />
                <p className="py-4">
                    En Heroes Evolved, disfrutarás de una experiencia
                    MOBA clásica con un juego de batallas multijugador
                    en tu dispositivo, ¡juega en cualquier momento y en
                    cualquier lugar! Elige entre más de 100 héroes
                    jugables, múltiples apariencias para darle a tu
                    héroe un look único en la competencia. ¡Prueba
                    varios estilos de juego como tanque, asesino,
                    soporte, guerrero y poderosas habilidades para
                    destruir las torres enemigas mientras defiendes las
                    tuyas!
                </p>
                <img
                    src={wih3}
                    alt=""
                    className="w-[620px] border border-blue-400 max-w-full h-auto m-auto my-8"
                />
            </section>
            <Aside />
        </section>
    );
};
