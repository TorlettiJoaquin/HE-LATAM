import { Link } from "react-router-dom";

export const ViewMore = () => {
    return (
        <div className=" w-[1240px] mx-auto my-0 text-right pt-2 tra ">
            <Link
                to="/news"
                className="transition-all duration-500 hover:scale-y-110 w-48 h-14 bg-view-bg bg-no-repeat bg-left-top inline-block "
            ></Link>
        </div>
    );
};
