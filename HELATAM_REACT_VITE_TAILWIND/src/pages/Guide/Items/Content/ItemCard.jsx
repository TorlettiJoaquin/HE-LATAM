import { useState } from "react";

import PropTypes from "prop-types";

export const ItemCard = ({ name, img, prop, effect, price, lvl }) => {
    const [showItem, setShowItem] = useState(false);

    const iPrefix = "https://img6.99.com/yhkd/image/data/equip/";

    return (
        <div>
            <li
                onMouseEnter={() => {
                    setShowItem(true);
                }}
                onMouseLeave={() => {
                    setShowItem(false);
                }}
                className="relative float-left p-1 mx-[18px] my-[10px] border-4 border-purple-900 rounded-2xl"
            >
                <img
                    src={`${iPrefix}${img}`}
                    alt={`${name} imagen`} 
                    className="w-[100px] h-[100px] rounded-lg"
                />
                <div
                    className={`${
                        showItem ? "block" : "hidden"
                    } absolute top-[60px] left-[60px] w-[620px] p-[20px] bg-black border border-[#0f3db8] z-50 rounded-xl`}
                >
                    <p className="py-[5px]">
                        <img
                            src={`${iPrefix}${img}`}
                            alt={`${name} imagen`} 
                            className="w-[64px] h-[64px] mr-[20px] float-left border border-[#0f3db8]"
                        />
                        <span className="text-[#adceff]">
                            {name}
                        </span>
                        <br />
                        <span className="text-[#adceff]">Precio: {price}</span>
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
        </div>
    );
};

ItemCard.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    prop: PropTypes.array.isRequired,
    effect: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    lvl: PropTypes.number.isRequired,
}