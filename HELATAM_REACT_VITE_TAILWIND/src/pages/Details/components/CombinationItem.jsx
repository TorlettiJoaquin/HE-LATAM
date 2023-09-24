import { useState } from "react";
import { ItemDetails } from "./ItemDetails";

export const CombinationItem = ({ heroeDetail, ItemData2 }) => {
  const [activeItem, setActiveItem] = useState(null);
  
  return (
    <div className="flex flex-col items-center gap-5 p-4 rounded-md">
      {heroeDetail?.equip?.map((item, i) => (
        <div key={i} className="mt-10">
          <div className="mb-6">
            {item?.reason?.map((obj) => (
              <h2 key={obj} className="text-2xl">
                {obj}
              </h2>
            ))}
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-10">
            {item?.arr?.map((obj) => {
              const imgSrc = `https://img6.99.com/yhkd/image/data/equip/${obj}.png`;
              const ItemFind = ItemData2.find((item) => item.id == obj);
              
              return (
                <div
                  key={obj}
                  className="relative flex flex-col justify-start items-center gap-1"
                >
                  <div
                    className="flex gap-2 border p-1 bg-orange-900 border-orange-400 w-2/3 cursor-pointer"
                    onMouseEnter={() => setActiveItem({item: obj, indice: i})}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <img
                      src={imgSrc}
                      onError={(e) => {
                        e.target.src = `https://img6.99.com/yhkd/image/data/equip/${obj}.jpg`;
                      }}
                      alt={obj}
                    />
                  </div>
                  
                  <h2 className="text-center text-sm">{ItemFind?.name}</h2>
                  {activeItem?.item == obj && activeItem?.indice === i && (
                    <ItemDetails ItemFind={ItemFind} imgSrc={imgSrc} obj={obj} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
