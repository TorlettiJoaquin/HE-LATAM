import { useState } from "react";
import i10004 from "../../../../assets/images/items/10004.webp";

export const ItemCard = () => {
    const [showItem, setShowItem] = useState(false);

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
                    src={i10004}
                    alt=""
                    className="w-[100px] h-[100px] rounded-lg"
                />
                <div
                    className={`${
                        showItem ? "block" : "hidden"
                    } absolute top-[60px] left-[60px] w-[620px] p-[20px] bg-black border border-[#0f3db8] z-50 rounded-xl`}
                >
                    <p className="py-[5px]">
                        <img
                            src={i10004}
                            alt=""
                            className="w-[64px] h-[64px] mr-[20px] float-left border border-[#0f3db8]"
                        />
                        <span className="text-[#adceff]">
                            Nombre: ENCHANTED ORB
                        </span>
                        <br />
                        <span className="text-[#adceff]">Precio: 2100</span>
                        <br />
                        <span className="text-[#adceff]">Star Level: 2</span>
                    </p>
                    <p>
                        Attribute: {"  "}
                        <span className="text-[#adceff]">Health +300</span>
                    </p>
                    <br />
                    <p>
                        Passive: {"  "}
                        <span className="text-[#adceff]">Spell Resist +15</span>
                    </p>
                    <br />
                    <p>
                        Unique Passive: {"  "}
                        <span className="text-[#adceff]">
                            Exorcism I: If your Health is lower than 35% by
                            taking magical damage, further magical damage is
                            reduced by 20% for 4s. Auto Cooldown is 30s.
                        </span>
                    </p>
                </div>
            </li>
        </div>
    );
};
