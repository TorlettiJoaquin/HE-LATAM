import { Navbar } from '../../constant/Navbar'
import { Footer } from '../../constant/Footer'
import HeroesData from '../../constant/Heroes/HeroesData'
import { HeroesItem } from './components/HeroesItem'
import { FilterHeroesItem } from './components/FilterHeroesItem'
import { useMemo, useState } from 'react'

export const Heroes = () => {
  const [filter, setFilter] = useState({
    type: 0,
    check: []
  })

  const heroes = useMemo(() => {
    if (filter.type === 0 && filter.check.length === 0) {
      return HeroesData.HeroesData
    }

    if (filter.type >= 1  && filter.check.length === 0) {
      return HeroesData.HeroesData.filter(hero => hero.type == filter.type)      
    }


    const filterType = filter.type === 0 ? HeroesData.HeroesData : HeroesData.HeroesData.filter(hero => hero.type == filter.type)
    const data = filterType.filter(hero => {
      return hero.features?.some(label => filter.check.includes(label.toLowerCase()));
    });

    return data

  }, [filter])
  
  return (
    <>
      <Navbar />
      <section className='bg-primary'>
        <div className='container mx-auto'>
          <h2 className='py-6 text-center text-4xl'>Elegi tu heroe</h2>

          <FilterHeroesItem filter={filter} setFilter={setFilter} />

          <div className='pt-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-10 gap-y-5 gap-x-5 pb-20'>
            {
              heroes.map(heroe => (
                <HeroesItem key={heroe.id} id={heroe.id} name={heroe.name}/>
              ))
            }
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}
