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

    const [active, setActive] = useState(false)
    const [filterItem, setFilterItem] = useState(ItemData2)

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
            <div className="px-10 md:px-5">
                <section className="text-[#adceff] text-base pb-5 md:py-10">
                    <h1 className="text-2xl md:text-4xl xl:text-6xl font-extrabold tracking-widest bg-gradient-to-b from-orange-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-glow font-garamond px-5 py-3 text-center transition-all duration-1000">
                        Items y Equipamiento
                    </h1>
                    <p className="py-5  text-lg xl:text-xl font-garamond font-bold text-center">
                        A medida que avances en el juego, adquirirás oro que podrás gastar en poderosos objetos que mejorarán el rendimiento de tus campeones en los Campos de la Justicia. Los objetos pueden proporcionar todo tipo de bonificaciones útiles, como movimiento más rápido, daño mejorado, mayor durabilidad, reducción del enfriamiento de habilidades, etc. Puedes comprar objetos en la tienda que está cerca de la plataforma del invocador donde apareces al principio de la partida.
                    </p>
                </section>
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
                <ul className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] 2xl:grid-cols-[repeat(auto-fill,_minmax(125px,_1fr))] gap-4 p-4 overflow-x-hidden">
                    {filterItem.map((item, idx) => (
                        <ItemCard
                            key={idx}
                            effect={item.effect}
                            img={item.img}
                            lvl={item.lvl}
                            name={item.name}
                            prize={item.prize}
                            prop={item.prop}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};
