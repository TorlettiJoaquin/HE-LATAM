import { useParams } from "react-router-dom";
import { Footer } from "../../constant/Footer";
import { Navbar } from "../../constant/Navbar";
import { useEffect, useState } from "react";
import { ComplexityRombos } from "../Heroes/components/ComplexityRombos";
import { VideoComponent } from "./components/VideoComponent";

export const Details = () => {
  const { heroId } = useParams();
  const [heroeDetail, setHeroeDetail] = useState(null);
  const [moreHistory, setMoreHistory] = useState(false);

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
      <section className="bg-primary relative h-screen flex items-center -mt-28">
        <img className="absolute bottom-0 left-0 top-0 right-0 z-0 h-full w-full object-cover" src={`https://heroes.99.com/en/resource/images/big-skin/${heroId}/0.jpg?v3`} alt={heroeDetail?.name} />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 py-20">
          <section className="z-30">
            <div className="flex flex-col gap-7 w-2/3">
              <h2 className="text-6xl">{heroeDetail?.name}</h2>
              <p className={`${moreHistory ? "" : "line-clamp-5"}`}>
                {heroeDetail?.story}
              </p>
              <div>
                <button
                  onClick={handleReedHistory}
                  className="text-gray-200 underline"
                >
                  Leer la historia completa
                </button>
              </div>

              <div>
                <h2 className="text-gray-200 text-2xl font-bold">
                  Tipo de ataque
                </h2>
                <div className="flex gap-2 mt-4">
                  {heroeDetail?.features?.map((feat) => (
                    <span className="bg-blue-900 px-4 py-2 rounded-2xl" key={feat}>
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-gray-200 text-2xl font-bold">Dificultad</h2>
                <ComplexityRombos complexityArray={heroeDetail?.data}/>
              </div>
            </div>
          </section>
          <section>
            <VideoComponent videoId={heroeDetail?.vid}/>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};
