import { useState } from "react";
import { ItemCard } from "./ItemCard";
import ItemData2 from "./ItemData2";

export const Content = () => {
    const ItemType = {
        "0": "Todos",
        "1": "Fisico",
        "2": "Magico",
        "3": "Resistencia",
        "4": "Botas",
        "5": "Accesorio",
    }

    const [active, setActive] = useState("0")
    const [filterItem, setFilterItem] = useState(ItemData2)

    const [activeIndex, setActiveIndex] = useState(null)
    const [activeItemInfo, setActiveItemInfo] = useState(null)

    const orderDesktop = Math.ceil((activeIndex + 1) / 6) * 6 - 1
    const orderMobile = Math.ceil((activeIndex + 1) / 2) * 2 - 1

    const handleItemClick = (idx) => {
        if (idx === activeIndex) {
            setActiveIndex(null)
            setActiveItemInfo(null)
        } else {
            setActiveIndex(idx)
            setActiveItemInfo(filterItem[idx])
        }
    }

    const handleClick = (e) => {
        let categotyType = e.target.value;
        setActive(categotyType);
        const newFilterItem = ItemData2.filter((item) => item.type === categotyType);
        categotyType === "0"
            ? setFilterItem(ItemData2)
            : setFilterItem(newFilterItem);
    };

    return (
        <section className="max-w-screen-lg w-full mx-auto my-0 relative">
            <div className="px-10 md:px-5 pb-10">
                <section className="text-[#adceff] text-base pb-5 md:py-10">
                    <h1 className="text-2xl md:text-4xl xl:text-6xl font-extrabold tracking-widest bg-gradient-to-b from-orange-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-glow font-garamond px-5 py-3 text-center transition-all duration-1000">
                        Items y Equipamiento
                    </h1>
                    <p className="py-5  text-lg xl:text-xl font-garamond font-bold text-center">
                        A medida que avances en el juego, adquirirás oro que podrás gastar en poderosos objetos que mejorarán el rendimiento de tus campeones en los Campos de la Justicia. Los objetos pueden proporcionar todo tipo de bonificaciones útiles, como movimiento más rápido, daño mejorado, mayor durabilidad, reducción del enfriamiento de habilidades, etc. Puedes comprar objetos en la tienda que está cerca de la plataforma del invocador donde apareces al principio de la partida.
                    </p>
                </section>
                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-around text-center font-semibold bg-indigo-950 text-xl md:border-x font-garamond">
                    {Object.keys(ItemType).map((item, idx) => (
                        <button key={idx}
                            onClick={handleClick}
                            value={item}
                            className={`${active === item ? "bg-indigo-900" : ""} leading-10 text-center hover:bg-indigo-900 md:w-1/6 w-full border uppercase cursor-pointer`}>
                            {ItemType[item]}
                        </button>
                    ))
                    }
                </div>
                <div className="w-full mt-2">
                    <input type="text" name="" id="" placeholder="BUSCA TU ITEM" className="w-full bg-indigo-950 border-2 rounded-lg text-center py-2" />
                </div>
                {/* Items */}
                <div>
                    <ul className="relative flex flex-row flex-wrap mx-auto my-0 p-4 py-8 overflow-x-hidden justify-start">
                        {/* Item CARD */}
                        {filterItem.map((item, idx) => (
                            <ItemCard
                                key={idx}
                                effect={item.effect}
                                img={item.img}
                                lvl={item.lvl}
                                name={item.name}
                                prize={item.prize}
                                prop={item.prop}
                                isActive={idx === activeIndex}
                                onClick={() => handleItemClick(idx)}
                                activeItemInfo={activeItemInfo}
                                style={{ order: idx }}
                            />
                        ))}
                        {/* Item INFO */}
                        {activeIndex !== null && (
                            <div className={`w-full block bg-[#0c0c0c] border-b-[1px] border-solid border-[#333] shadow-[inset_0_-4px_10px_0_rgba(0,0,0,0.75)]`} style={{ order: window.innerWidth >= 768 ? orderDesktop : orderMobile }}>
                                <div className="w-full pb-12">
                                    <div className="border-b-[1px] border-solid border-[#333] text-left p-[3rem_2.5rem_1.5rem]">
                                        <h6 className="text-[#ada176] inline-block mr-12">{activeItemInfo.name}</h6>
                                        <h6 className="inline-block">{activeItemInfo.prize}</h6>
                                    </div>
                                    <div className="text-base text-left p-[3rem_0_1.5rem_2.5rem] text-[#bcbcbc]">
                                        <div>
                                            <div>
                                                {activeItemInfo.prop}
                                            </div>
                                            <div>
                                                {activeItemInfo.effect}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                    </ul>
                </div>
            </div>
        </section>
    );
};
