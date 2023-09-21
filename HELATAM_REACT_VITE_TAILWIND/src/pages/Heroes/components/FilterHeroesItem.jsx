export const FilterHeroesItem = ({filter, setFilter}) => {
  const handleChangeCheck = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFilter({ ...filter, check: [...filter.check, value] })
    }else{
      const filterCheckBox = filter.check.filter(check => check !== value)

      setFilter({ ...filter, check: filterCheckBox })
    }

  }

  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap gap-1 justify-center">
          <li>
            <button
              // className={`${filter.type === 0 ? 'bg-black text-gray-600 border-gray-300' : 'bg-secondary border-transparent' } inline-block w-[200px] rounded-l-xl py-4 border-b-2  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-30 text-2xl`}
              className={`${filter.type === 0 ? "bg-indigo-900" : ""} leading-10 text-center hover:bg-indigo-900 border w-[200px] uppercase cursor-pointer`}
              type="button"
              onClick={() => setFilter({ ...filter, type: 0 }) }
            >
              Todos
            </button>
          </li>
          <li>
            <button
              className={`${filter.type === 1 ? "bg-indigo-900" : ""} leading-10 text-center hover:bg-indigo-900 border w-[200px] uppercase cursor-pointer`}
              type="button"
              onClick={() => setFilter({ ...filter, type: 1 }) }
            >
              Fuerza
            </button>
          </li>
          <li>
            <button
              className={`${filter.type === 2 ? "bg-indigo-900" : ""} leading-10 text-center hover:bg-indigo-900 border w-[200px] uppercase cursor-pointer`}
              type="button"
              onClick={() => setFilter({ ...filter, type: 2 }) }
            >
              Agilidad
            </button>
          </li>
          <li>
            <button
              className={`${filter.type === 3 ? "bg-indigo-900" : ""} leading-10 text-center hover:bg-indigo-900 border w-[200px] uppercase cursor-pointer`}
              type="button"
              onClick={() => setFilter({ ...filter, type: 3 }) }
            >
              Inteligencia
            </button>
          </li>
        </ul>
      </div>

      <section className="flex flex-wrap gap-4 justify-center my-5">
        <div className="flex gap-2">
          <input value='melee' onChange={handleChangeCheck} type="checkbox" />
          <label htmlFor="">Melee</label>
        </div>
        <div className="flex gap-2">
          <input value='ranged' onChange={handleChangeCheck} type="checkbox" />
          <label htmlFor="">Ranged</label>
        </div>
        <div className="flex gap-2">
          <input value='nuker' onChange={handleChangeCheck} type="checkbox" />
          <label htmlFor="">Nuker</label>
        </div>
        <div className="flex gap-2">
          <input value='durable' onChange={handleChangeCheck} type="checkbox" />
          <label htmlFor="">Durable</label>
        </div>
        <div className="flex gap-2">
          <input value='disabler' onChange={handleChangeCheck} type="checkbox" />
          <label htmlFor="">Disabler</label>
        </div>
        <div className="flex gap-2">
          <input value='ganker' onChange={handleChangeCheck} type="checkbox"/>
          <label htmlFor="">Ganker</label>
        </div>
        <div className="flex gap-2">
          <input value='carry' onChange={handleChangeCheck} type="checkbox" />
          <label htmlFor="">Carry</label>
        </div>
        <div className="flex gap-2">
          <input value='pusher' onChange={handleChangeCheck} type="checkbox" />
          <label htmlFor="">Pusher</label>
        </div>
      </section>
    </>
  );
};
