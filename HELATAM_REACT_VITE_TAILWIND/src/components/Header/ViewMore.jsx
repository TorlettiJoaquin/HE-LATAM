import { Link } from "react-router-dom";

export const ViewMore = () => {
    return (
        <div className="absolute w-3/6 place-content-center -top-6 -left-5 flex flex-row gap-10 z-30">
            <div className="font-bold">ULTIMAS NOTICIAS</div>
            <Link
                to="/news"
                className="transition-all duration-200 hover:tracking-widest"
            >  VER TODOS</Link>
        </div>
    );
};
