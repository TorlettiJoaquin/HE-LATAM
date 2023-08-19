import { useState } from "react";

export const ItemCard = ({ name, img, prop, effect, prize, lvl }) => {
    const [showItem, setShowItem] = useState(false);

    const iPrefix = "https://img6.99.com/yhkd/image/data/equip/";

    return (

        <li
            onMouseEnter={() => {
                setShowItem(true);
            }}
            onMouseLeave={() => {
                setShowItem(false);
            }}
            className="relative p-1 m-[8px] border-4 border-purple-900 rounded-2xl aspect-square"
        >
            <img
                src={`${iPrefix}${img}`}
                alt={`${name}`}
                className="aspect-square w-full h-full rounded-lg"
            />
            <div
                className={`${showItem ? "block" : "hidden"
                    } absolute top-[60px] left-[60px] w-[620px] p-[20px] bg-black border border-[#0f3db8] z-50 rounded-xl`}
            >
                <p className="py-[5px]">
                    <img
                        src={`${iPrefix}${img}`}
                        alt={`${name}`}
                        className="w-[64px] h-[64px] mr-[20px] float-left border border-[#0f3db8]"
                    />
                    <span className="text-[#adceff]">
                        {name}
                    </span>
                    <br />
                    <span className="text-[#adceff]">Precio: {prize}</span>
                    <br />
                    <span className="text-[#adceff]">Star Level: {lvl}</span>
                </p>
                <p>
                    Attribute: {"  "}
                    <span className="text-[#adceff]">{prop}</span>
                </p>
                <br />
                <p>
                    <span className="text-[#adceff]">
                        {effect}
                    </span>
                </p>
            </div>
        </li>

    );
};