const Data = [
  {
    name: "all",
    id: 0,
  },
  {
    value: "recomendation",
    name: "Recomendation",
    id: 1,
  },
  {
    value: "feature",
    name: "New Feature",
    id: 2,
  },
  {
    value: "hero",
    name: "Hero Guide",
    id: 3,
  },
];

export const FilterSeccionPost = ({filter, setFilter}) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap gap-1 justify-center py-10">
        {Data.map((seccion) => (
          <li key={seccion.id}>
            <button
              className={`${filter.type === seccion.id ? "bg-indigo-900" : ""} leading-10 text-center hover:bg-indigo-900 border w-[200px] uppercase cursor-pointer`}
              type="button"
              onClick={() => setFilter({ ...filter, type: seccion.id }) }
            >
              {seccion.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
