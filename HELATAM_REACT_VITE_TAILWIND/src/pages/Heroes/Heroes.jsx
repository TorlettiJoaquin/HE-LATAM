import { Navbar } from "../../constant/Navbar";
import { Footer } from "../../constant/Footer";
import HeroesData from "../../constant/Heroes/HeroesData";
import { HeroesItem } from "./components/HeroesItem";
import { FilterHeroesItem } from "./components/FilterHeroesItem";
import { useMemo, useState } from "react";
import './Heroes.css'

export const Heroes = () => {
  const [filter, setFilter] = useState({
    type: 0,
    check: [],
    search: ''
  });
  
  const heroes = useMemo(() => {
    let filteredHeroes = HeroesData.HeroesData;
  
    if (filter.type >= 1) {
      filteredHeroes = filteredHeroes.filter((hero) => hero.type == filter.type);
    }
  
    if (filter.check.length > 0) {
      filteredHeroes = filteredHeroes.filter((hero) =>
        filter.check.every((skill) => {
          const data = hero["features"]?.map(heroSkill => heroSkill.toLowerCase());
          return data?.includes(skill.toLowerCase());
        })
      );
    }
  
    if (filter.search.trim() !== '') {
      filteredHeroes = filteredHeroes.filter((hero) =>
        hero.name.toLowerCase().includes(filter.search.toLowerCase())
      );
    }
  
    return filteredHeroes;
  }, [filter]);
  

  return (
    <>
      <Navbar />
      <section className="bg-no-repeat bg-[center_top] bg-newbg-bg bg-fixed">
        <div className="container mx-auto pt-28">
          <h2 className="py-6 text-center text-6xl mt-12 mb-5 font-bold">Elegi tu heroe</h2>

          <FilterHeroesItem filter={filter} setFilter={setFilter} />

          {heroes.length === 0 && <h2 className="text-center font-bold text-4xl my-12">No hay heroes con esas caracteristicas...</h2>}
          <div className="pt-6 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-y-5 gap-x-5 pb-20 mx-2 md:mx-0">
            {heroes.map((heroe) => (
              <HeroesItem key={heroe.id} id={heroe.id} name={heroe.name} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
