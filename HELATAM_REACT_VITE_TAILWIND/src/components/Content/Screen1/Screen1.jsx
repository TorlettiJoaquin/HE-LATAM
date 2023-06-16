import { ViewMore } from "./ViewMore";
import { HeroesSc1 } from "./HeroesSc1";

export const Screen1 = () => {
    return (
        <div className="h-[1045px] pt-20">
            <div className="w-[1000px] h-[80px] mx-auto my-0">
                <h2 className="w-0 h-0 hidden">INVOCA HEROES INMORTALES</h2>
            </div>
            <p className="w-[900px] mx-auto my-0 text-[#99bcfd] text-lg leading-7 text-center">
                ¡En Heroes Evolved, Zorro, Pandora, Zhao Yun y otros héroes
                inmortales de todo el mundo están esperando tu llamada! ¡Conoce
                sus atributos y habilidades y llévalos a la victoria!
            </p>
            <HeroesSc1 />
            <ViewMore />
        </div>
    );
};
