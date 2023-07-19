import Heroes from "./Heroes/Heroes";
import MapInteractivo from "./MapInteractivo/MapInteractivo";
// import News from "./News/News";

export const Content = () => {
    return (
        <section className="relative bg-black flex flex-col">
            <MapInteractivo />
            <Heroes />
        </section>
    );
};
