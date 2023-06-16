import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { AiFillCaretRight } from "react-icons/ai";

const ContentCard = ({ imgSrc, imgAlt, title, url }) => {
    return (
        <li className="relative float-left w-[393px] h-[253px] my-[10px] mx-[14px] py-[3px] px-[3px] border-4 border-blue-800 rounded-lg">
            <Link to={url}>
                <img src={imgSrc} alt={imgAlt} className="w-full rounded" />
                <span className="absolute bottom-[3px] left-[3px] inline-block w-[379px] h-[40px] text-[#adceff] text-[22px] px-5 py-[3px] text uppercase bg-black bg-opacity-30 font-bold">
                    <p className="hover:drop-shadow-glow hover:text-white">
                        {title}
                        
                    </p>
                    <AiFillCaretRight className="absolute inline-block right-[5px] bottom-[9px] text-[#adceff] text-[22px]" />
                </span>
            </Link>
        </li>
    );
};

export default ContentCard;

ContentCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
