import { ItemCard } from "./ItemCard";
import ItemData2 from "./ItemData2";

export const Content = () => {
    return (
        <section className="max-w-screen-lg w-full mx-auto my-0 relative">
            <div className="px-10 md:px-5">
                <section className="text-[#adceff] text-base pb-5 md:py-10">
                    <h1 className="text-2xl xl:text-4xl font-extrabold tracking-widest bg-gradient-to-b from-orange-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-glow font-garamond px-5 py-3 text-center">
                        Items y Equipamiento
                    </h1>
                    <p className="py-5 text-lg xl:text-xl font-garamond font-bold text-center">
                        Mientras el juego progresa irás adquiriendo oro que
                        puedes gastar en ítems más poderosos que mejoran las
                        características de tu héroe. Estos ítems pueden varios
                        tipos de mejoras. Por ejemplo, velocidad de movimiento,
                        aumento de daño, mayor resistencia, reducción de
                        enfriamiento de las habilidades, etc. Puedes comprar
                        ítems en la tienda cerca de la plataforma de invocación
                        donde apareces al comienzo del juego.
                    </p>
                </section>
                <ul className="flex flex-col md:flex-row justify-around text-center font-semibold bg-indigo-950 text-xl [&>*]md:w-1/6 [&>*]:w-full border-y [&>*]:border-y [&>*]:md:border-x [&>*]:uppercase [&>*]:cursor-pointer font-garamond">
                    <li className=" leading-10 text-center hover:bg-indigo-900">
                        Todos
                    </li>
                    <li className="leading-10 text-center hover:bg-indigo-900">
                        Fisicos
                    </li>
                    <li className="leading-10 text-center hover:bg-indigo-900">
                        Magicos
                    </li>
                    <li className="leading-10 text-center hover:bg-indigo-900">
                        Defensivos
                    </li>
                    <li className="leading-10 text-center hover:bg-indigo-900">
                        Botas
                    </li>
                    <li className="leading-10 text-center hover:bg-indigo-900">
                        Vigilante
                    </li>
                </ul>
                <ul className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] 2xl:grid-cols-[repeat(auto-fill,_minmax(125px,_1fr))] gap-4 p-4">
                    {ItemData2.map((item, idx) => (
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
