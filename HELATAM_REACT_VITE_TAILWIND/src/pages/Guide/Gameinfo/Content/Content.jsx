import ContentCard from "./ContentCard";
import ContentData from "./ContentData";

export const Content = () => {
    return (
        <section className="relative pb-5 md:pb-[55px] md:py-[55px]">
            <div className="w-full h-full">
                <h1 className="inset-x-0 w-full text-5xl md:text-6xl font-garamond font-bold drop-shadow-glow tracking-widest text-center md:rounded-full md:py-10 transition-all duration-1000">Portal a la Victoria</h1>
                <p className="w-2/3 mx-auto leading-6 text-center py-5">
                    ¡El Aegis ofrece múltiples maneras de lograr tus objetivos, mediante batallas
                    frenéticas junto a tu equipo! ¡Encuentra
                    el modo que se adapte mejor a tu estilo y traza tu camino
                    hacia la gloria!
                </p>

                <ul className="flex flex-wrap w-full h-full justify-center transition-all duration-1000 px-4">
                    {ContentData.map((item, idx) => (
                        <ContentCard
                            key={idx}
                            imgSrc={item.srcImg}
                            imgAlt={item.srcAlt}
                            title={item.title}
                            url={item.url}
                        />
                    ))}
                </ul>

            </div>
        </section>
    );
};
