import { ViewMore } from "./ViewMore";

export const Screen2 = () => {
    return (
        <div className="h-[1090px] pt-[125px]">
            <div className="w-[1000px] h-[80px] mx-auto my-0">
                <h2 className="w-0 h-0 hidden">
                    EXPLORA EL MÍSTICO CAMPO DE BATALLA
                </h2>
            </div>
            <p className="w-[900px] mx-auto my-0 text-[#99bcfd] text-lg leading-7 text-center">
                Antes de la batalla, deberías familiarizarte con el mapa y las
                condiciones de la victoria. ¡Luego elige héroes y carriles
                adecuados para ir por la victoria!
            </p>
            <div className="h-[730px]"></div>
            <ViewMore />
        </div>
    );
};
