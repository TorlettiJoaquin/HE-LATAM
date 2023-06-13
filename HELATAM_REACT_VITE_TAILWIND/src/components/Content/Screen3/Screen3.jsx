import { Link } from "react-router-dom";

export const Screen3 = () => {
    return (
        <div className="h-[1223px] pt-[90px]">
            <div className="w-[1000px] h-20 mx-auto my-0">
                <h2 className="hidden w-0 h-0">Unique Skins For Heroes</h2>
            </div>
            <p className="w-[900px] mx-auto my-0 text-center text-[#99bcfd] text-lg">
                Unlock unique heroes and gorgeous skins to make you incomparable
                in the battle!
            </p>
            <div className="h-[850px]"></div>
            <div className="py-[50px] text-base text-center">
                <Link to="/download" className="relative block text-black w-[273px] h-[75px] leading-[75px] text-[22px] text-center my-0 mx-auto bg-btns-bg bg-no-repeat bg-[0-326px]">Play Now</Link>
            </div>
        </div>
    );
};
