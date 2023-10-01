export const ComplexityRombos = ({ complexityArray }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-2 mt-4">
      {complexityArray?.map((value, index) => (
        <div key={index} className="grid items-center grid-cols-4 gap-10 md:gap-1">
          <h2 className="font-bold">
            {index === 0 && "ATTACKS"}
            {index === 1 && "SPELLS"}
            {index === 2 && "HEALTH"}
            {index === 3 && "DIFFICULTY"}
          </h2>
          <div className="flex col-span-2">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className={`w-4 h-4 border border-black transform rotate-45 ${
                  i < value ? "bg-blue-700" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
