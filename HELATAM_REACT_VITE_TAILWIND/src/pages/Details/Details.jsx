import { useParams } from "react-router-dom";
import { Footer } from "../../constant/Footer";
import { Navbar } from "../../constant/Navbar";
import { useEffect, useState } from "react";
import { ComplexityRombos } from "../Heroes/components/ComplexityRombos";
import ItemData2 from "../Guide/Items/Content/ItemData2";
import './Details.css'
import { CombinationItem } from "./components/CombinationItem";

export const Details = () => {
  const { heroId } = useParams();
  const [heroeDetail, setHeroeDetail] = useState(null);
  const [moreHistory, setMoreHistory] = useState(false);
  const [stepTab, setStepTab] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `/public/data/${heroId}.json`;

        const response = await fetch(url);

        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setHeroeDetail(data);
        } else {
          console.error("Error al cargar los datos del héroe");
        }
      } catch (error) {
        console.log(error);
      }
    };

    return () => getData();
  }, [heroId]);

  const handleReedHistory = () => {
    setMoreHistory(!moreHistory);
  };

  return (
    <>
      <Navbar />
      <div className="bg-primary">
        <section className="relative w-full h-screen flex items-center">
          <img
            className="absolute bottom-0 left-0 top-0 right-0 z-0 h-full w-full object-cover"
            src={`https://heroes.99.com/en/resource/images/big-skin/${heroId}/0.jpg?v3`}
            alt={heroeDetail?.name}
          />
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 py-20">
            <section
              className="z-10 p-10 md:px-6 md:py-4 rounded-3xl lg:w-5/5 xl:w-4/5 mx-2 md:mt-28"
              style={{ backgroundColor: "#00000050" }}
            >
              <div className="flex flex-col gap-7 md:w-2/3">
                <h2 className="text-6xl">{heroeDetail?.name}</h2>
                <p
                  className={`${
                    moreHistory ? "overflow-y-auto h-40" : "line-clamp-5"
                  } text-gray-100`}
                >
                  {heroeDetail?.story}
                </p>
                <div>
                  <button
                    onClick={handleReedHistory}
                    className="text-gray-400 font-bold text-sm underline"
                  >
                    {moreHistory
                      ? "Ocultar historia"
                      : "Leer la historia completa"}
                  </button>
                </div>

                <div>
                  <h2 className="text-gray-200 text-2xl font-bold">
                    Tipo de ataque
                  </h2>
                  <div className="flex gap-2 mt-4">
                    {heroeDetail?.features?.map((feat) => (
                      <span
                        className="bg-blue-900 px-4 py-2 rounded-2xl"
                        key={feat}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-gray-200 text-2xl font-bold">
                    Dificultad
                  </h2>
                  <ComplexityRombos complexityArray={heroeDetail?.data} />
                </div>
                <div>
                  {heroeDetail?.skin.length !== 0 && (
                    <h2 className="text-gray-200 text-2xl font-bold mb-4">
                      Skins
                    </h2>
                  )}
                  <div className="flex gap-2 items-center">
                    {heroeDetail?.skin.map((ski) => (
                      <img
                        width={40}
                        height={40}
                        className="object-contain"
                        key={ski.id}
                        src={`https://img5.99.com/yhkd/image/data/hero/${heroId}/head/${ski.imgSrc}?`}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="container mx-auto pt-20 ">
          <div className="bg-thrid p-4 rounded-md mx-2 lg:mx-0">
            <h2 className="text-4xl font-bold mb-6">Habilidades</h2>
            <div className="p-4 rounded-md">
              <div className="flex gap-3">
                {heroeDetail?.ski.map((sk, i) => (
                  <button
                    className={`${
                      stepTab === i
                        ? "bg-primary border-t-2 border-l-2 border-r-2 border-spacing-3 border-gray-600"
                        : ""
                    } p-4`}
                    onClick={() => setStepTab(i)}
                    key={sk.keyword}
                  >
                    <img
                      src={`https://img6.99.com/yhkd/image/data/hero//${heroId}/${sk.img}`}
                      alt={sk.keyword}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-4 flex-col p-5 bg-primary border-2 -mt-1 border-gray-600">
                <h2 className="text-2xl font-bold">
                  {heroeDetail?.ski[stepTab].name}
                </h2>
                <p>{heroeDetail?.ski[stepTab].desc[0]}</p>
                <div className="flex flex-col gap-2">
                  {heroeDetail?.ski[stepTab].data.map((element) => (
                    <span className="text-sm text-gray-400" key={element}>
                      {element}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-20">
          <div className="bg-thrid p-4 rounded-md mx-2 lg:mx-0">
            <h2 className="text-4xl font-bold mb-6">Equipamiento</h2>
            <CombinationItem heroeDetail={heroeDetail} ItemData2={ItemData2}/>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
