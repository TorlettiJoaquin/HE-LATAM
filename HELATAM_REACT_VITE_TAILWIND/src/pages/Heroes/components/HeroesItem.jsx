import { Link } from 'react-router-dom';
import './HeroesItem.css'

export const HeroesItem = ({ name, id }) => {
  return (
    <Link to={`/heroes/${id}`} className="cursor-pointer heroes">
      <img
        src={`https://img6.99.com/yhkd/image/data/hero/head/${id}.jpg`}
        alt={name}
        className="object-contain flex items-center gap-[0 0.2rem] h-28 md:h-36 rounded-xl mr-4 shadow-[0_0.1rem_0.2rem_#000] transition-transform"
      />
      <h2 className="name">{name}</h2>
    </Link>
  );
};
