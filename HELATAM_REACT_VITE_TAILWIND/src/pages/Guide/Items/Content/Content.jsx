import { ItemCard } from "./ItemCard";
import ItemData2 from "./ItemData2";

export const Content = () => {
    return (
        <section className="min-w-[1280px] max-w-[1920px] w-full mx-auto my-0 relative pb-[180px] ">
            <div className="w-[1200px] mx-auto my-0">
                <section className="h-[530px] p-[230px_0_0_47%] text-[#adceff] text-base">
                    <h1 className="w-0 h-0 overflow-hidden">
                        Items y Equipamiento
                    </h1>
                    <p className="">
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
                <ul className="flex bg-indigo-950 text-xl  border-l [&>*]:border-r [&>*]:cursor-pointer ">
                    <li className="left w-[200px] h-[40px] leading-10 text-center hover:bg-indigo-900">
                        Todos
                    </li>
                    <li className="left w-[200px] h-[40px] leading-10 text-center hover:bg-indigo-900">
                        Fisicos
                    </li>
                    <li className="left w-[200px] h-[40px] leading-10 text-center hover:bg-indigo-900">
                        Magicos
                    </li>
                    <li className="left w-[200px] h-[40px] leading-10 text-center hover:bg-indigo-900">
                        Defensivos
                    </li>
                    <li className="left w-[200px] h-[40px] leading-10 text-center hover:bg-indigo-900">
                        Tillas
                    </li>
                    <li className="left w-[200px] h-[40px] leading-10 text-center hover:bg-indigo-900">
                        Vigilante
                    </li>
                </ul>
                <div>
                    <ul className="w-[94%] p-[30px] mx-auto my-0">
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
            </div>
        </section>
    );
};
