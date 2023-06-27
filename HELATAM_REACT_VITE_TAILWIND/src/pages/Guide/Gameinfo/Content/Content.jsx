import ContentCard from "./ContentCard";
import ContentData from "./ContentData";

export const Content = () => {
    return (
        <section className="relative min-w-[1280px] max-w-[1920px] w-full mx-auto my-0 pt-[350px] pb-[100px]">
            <div className="min-w-[1280px] w-[90%] h-auto mx-auto my-0 ">
                <h1 className="w-0 h-0 hidden">Portal a la Victoria</h1>
                <p className="w-[800px] h-[52px] pb-[68px] mx-auto my-0 leading-6 text-center">
                    ¡El Aegis ofrece múltiples maneras de lograr tus objetivos, mediante batallas
                    frenéticas junto a tu equipo! ¡Encuentra
                    el modo que se adapte mejor a tu estilo y traza tu camino
                    hacia la gloria!
                </p>
                <div className="w-[1324px] h-auto mx-auto my-0">
                    <ul className="w-full">
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
            </div>
        </section>
    );
};
