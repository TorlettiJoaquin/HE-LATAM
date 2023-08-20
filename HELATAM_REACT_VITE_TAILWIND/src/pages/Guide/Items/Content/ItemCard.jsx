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
                    } absolute left-0 top-[110px] w-[calc(100vw-135px)] p-3 backdrop-blur-3xl border-4 border-[#0f3db8] z-50 rounded-xl`}
            >
                <div className="flex gap-3 justify-around">
                    <img
                        src={`${iPrefix}${img}`}
                        alt={`${name}`}
                        className="w-[64px] h-[64px] rounded border-2 border-[#0f3db8]"
                    />
                    <div className="flex flex-col text-center">
                        <h2 className="font-medium">
                            {name}
                        </h2>
                        <span className="text-[#adceff]">Precio: {prize}</span>
                        <span className="text-[#adceff]">Star Level: {lvl}</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p>
                        Atributo: {"  "}
                        <span className="text-[#adceff]">{prop}</span>
                    </p>
                    <p>
                        <span className="text-[#adceff]">
                            {effect}
                        </span>
                    </p>
                </div>

            </div>
        </li>

    );
};