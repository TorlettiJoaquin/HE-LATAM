import Heroes from "./Heroes/Heroes";
import MapInteractivo from "./MapInteractivo/MapInteractivo";
import News from "./News/News";
// import News from "./News/News";

export const Content = () => {
    return (
        <section className="relative bg-black flex flex-col">
            <div className="lg:hidden">
                <News />
            </div>
            <MapInteractivo />
            <Heroes />
        </section>
    );
};
