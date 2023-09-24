
export const ItemDetails = ({ItemFind, obj, imgSrc}) => {
  return (
    <div className="bg-primary w-[300px] modal-info p-3 absolute top-24 z-10 border border-orange-400">
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 border p-1 bg-orange-900 border-orange-400 w-[60px] cursor-pointer">
          <img
            src={imgSrc}
            onError={(e) => {
              e.target.src = `https://img6.99.com/yhkd/image/data/equip/${obj}.jpg`;
            }}
            alt={obj}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-yellow-400">{ItemFind?.name}</h2>
          <p>{ItemFind?.prize}</p>
        </div>
      </div>
      <div>
        {ItemFind?.prop.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
};
