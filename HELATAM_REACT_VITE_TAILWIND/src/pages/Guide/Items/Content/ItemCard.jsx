// import { useState } from "react";

export const ItemCard = ({ style, img, name, isActive, onClick }) => {
    // prop, effect, prize, lvl / Va arriba

    const iPrefix = "https://img6.99.com/yhkd/image/data/equip/";

    return (

        <li
            onClick={onClick}
            className={`relative w-1/2 md:w-1/6 p-3 pb-4 transition-all duration-500 cursor-pointer ${isActive ? "bg-[#0c0c0c] rounded-t-md" : "bg-transparent hover:scale-125"}`}
            style={{ order: style.order }}
        >
            <div className="">
                <img
                    src={`${iPrefix}${img}`}
                    alt={`${name}`}
                    className="aspect-square w-full h-full transition-all duration-500 border border-yellow-700 hover:border-white"
                />
                <div className="text-center text-sm font-light leading-4 py-1">
                    <p className="">
                        {name}
                    </p>
                </div>
            </div>

        </li>

    );
};