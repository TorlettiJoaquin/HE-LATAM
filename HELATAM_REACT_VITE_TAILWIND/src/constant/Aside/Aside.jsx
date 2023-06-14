import { FacebookEmbed } from "./FacebookEmbed";
import { Highlight } from "./Highlight";

export const Aside = () => {
    return (
        <aside className="relative float-left w-[364px]">
            <FacebookEmbed />
            <Highlight />
        </aside>
    );
};
