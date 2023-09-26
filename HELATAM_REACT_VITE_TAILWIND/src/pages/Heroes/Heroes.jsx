import { Navbar } from "../../constant/Navbar";
import { Footer } from "../../constant/Footer";
import HeroesData from "../../constant/Heroes/HeroesData";
import { HeroesItem } from "./components/HeroesItem";
import { FilterHeroesItem } from "./components/FilterHeroesItem";
import { useMemo, useState } from "react";

export const Heroes = () => {
  const [filter, setFilter] = useState({
    type: 0,
    check: [],
  });

  const heroes = useMemo(() => {
    if (filter.type === 0 && filter.check.length === 0) {
      return HeroesData.HeroesData;
    }

    if (filter.type >= 1 && filter.check.length === 0) {
      return HeroesData.HeroesData.filter((hero) => hero.type == filter.type);
    }

    const filterType =
      filter.type === 0
        ? HeroesData.HeroesData
        : HeroesData.HeroesData.filter((hero) => hero.type == filter.type);

    const dataFilterCheckbox = filterType.filter((hero) =>
      filter.check.every((skill) => {
        const data = hero["features"]?.map(heroSkill => heroSkill.toLowerCase())
        return data?.includes(skill.toLowerCase())
      })
    );

    return dataFilterCheckbox;
  }, [filter]);

  return (
    <>
      <Navbar />
      <section className="bg-primary">
        <div className="container mx-auto pt-28">
          <h2 className="py-6 text-center text-4xl">Elegi tu heroe</h2>

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
