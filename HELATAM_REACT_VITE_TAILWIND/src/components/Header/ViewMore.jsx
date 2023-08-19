import { Link } from "react-router-dom";

export const ViewMore = () => {
    return (
        <div className="lg:absolute w-3/6 mx-auto lg:mx-0 place-content-center text-center lg:text-left -top-6 lg:-top-10 -left-5 flex flex-col lg:flex-row lg:gap-10 z-10">
            <div className="font-bold text-gray-400 z-10">ULTIMAS NOTICIAS</div>
            <Link
                to="/news"
                className="transition-all duration-200 hover:tracking-widest"
            >VER TODOS</Link>
        </div>
    );
};
