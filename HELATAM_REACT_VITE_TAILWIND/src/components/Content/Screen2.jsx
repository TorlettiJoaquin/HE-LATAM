import { ViewMore } from "./ViewMore";

export const Screen2 = () => {
    return (
        <div className="h-[1090px] pt-[125px]">
            <div className="w-[1000px] h-[80px] mx-auto my-0">
                <h2 className="w-0 h-0 hidden">Explore The Mystic Battlefield</h2>
            </div>
            <p className="w-[900px] mx-auto my-0 text-[#99bcfd] text-lg leading-7 text-center">
                Before the battle, you should get acquainted with the map layout
                and victory conditions. Then choose suitable heroes and lanes to
                go for the victory!
            </p>
            <div className="h-[730px]"></div>
            <ViewMore />
        </div>
    );
};
