

export const FilterSeccionPost = ({filter, setFilter}) => {
  return (
    <form className="my-10 text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
      <input onChange={(e) => setFilter(e.target.value)} placeholder="Search..." type="text" className="w-full p-3 lg:w-[1000px] rounded-xl" />
      {filter}
    </form>
  );
};
