import { Link } from 'react-router-dom';
import './HeroesItem.css'

export const HeroesItem = ({ name, id }) => {
  return (
    <Link to={`/heroes/${id}`} className="cursor-pointer heroes mx-auto aspect-square rounded-xl overflow-hidden">
      <img
        src={`https://img6.99.com/yhkd/image/data/hero/head/${id}.jpg`}
        alt={name}
        className="w-full h-full object-contain aspect-square flex items-center rounded-xl shadow-[0_0.1rem_0.2rem_#000] transition-transform overflow-hidden"
      />
      <h2 className="name">{name}</h2>
    </Link>
  );
};
