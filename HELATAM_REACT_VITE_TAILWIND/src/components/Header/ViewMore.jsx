import { Link } from "react-router-dom";

export const ViewMore = () => {
    return (
        <div className="mb-[10px] ml-[15px] flex flex-row gap-10 z-30">
            <div>ULTIMAS NOTICIAS</div>
            <Link
                to="/news"
                className="transition-all duration-500 hover:scale-y-110"
            >  VER TODOS</Link>
        </div>
    );
};
