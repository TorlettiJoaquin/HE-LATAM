import { useEffect, useMemo, useState } from "react";
import { Footer } from "../constant/Footer";
import { Navbar } from "../constant/Navbar";
import { PostFacebook } from "./components/PostFacebook";
import { Spinner } from "../components/Spinner/Spinner";
import { FilterSeccionPost } from "./components/FilterSeccionPost";
import { convertData } from "../helpers/convertData";

export const Guide = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  const postsFacebook = useMemo(() => {
    if (filter === "") {
      return posts;
    }

    const dataFilterSearch = posts?.filter((post) =>
      post.message.toLowerCase().includes(filter.toLocaleLowerCase())
    );

    return dataFilterSearch;
  }, [filter, posts]);

  useEffect(() => {
    const getPostData = async () => {
      const url =
        "https://graph.facebook.com/me?fields=id,posts.limit(10){created_time,message,link,full_picture,permalink_url}&access_token=EAATD7F2VFCgBO5Fiqq1CwluZAv3pJHmfVxpZBZBZCTlnjHDMmf5neKyqXDHTKNGr66elUyqs0t3eWlRZBBcBeahC2jsiYkUcdYWsPqORIB4s3QDf2LZClQk4vF5sNCufQ4jAsWuxOYiEnIr0l9yEaW2HZA7k7eetJVU29ZBrCuaJulahsaXlZCGhJ6AcR";

      try {
        setLoading(true);
        const response = await fetch(url);
        if (response.ok) {
          const result = await response.json();
          const mock = result.posts.data.filter((post) => {
            if (
              post?.message
                ?.toLocaleLowerCase()
                .includes("#HeroesEvolvedGuide".toLowerCase())
            ) {
              return {
                message: post.message ?? "",
                id: post.id,
                photo: post.full_picture ?? "",
                link: post.permalink_url ?? "",
                time: post.created_time,
              };
            }
          });
          setPosts(mock);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    return () => {
      getPostData();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main className="bg-img">
        <h2 className="text-4xl text-center pt-20 lg:py-28 lg:text-6xl">
          Portal de victoria
        </h2>
        {loading ? (
          <Spinner />
        ) : posts.length !== 0 ? (
          <div className="container mx-auto lg:w-[1000px] grid grid-cols-3 mb-20 gap-6">
            {posts?.slice(0, 3).map((post) => (
              <a
                target="_blank"
                href={post.link}
                key={post.id}
                className="bg-thrid border border-spacing-2 border-orange-700 transition-all hover:scale-105"
                rel="noreferrer"
              >
                <img
                  src={
                    post.photo !== ""
                      ? post.photo
                      : "https://i.postimg.cc/g2CJtxhb/1694461214812.jpg"
                  }
                  alt={post.message}
                  className="object-cover"
                />
                <div className="py-4 px-2 flex flex-col justify-between border border-t-4 border-black">
                  <h2 className="font-bold line-clamp-1">{post.message}</h2>
                  <span className="text-sm">{convertData(post.time)}</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <h2 className="font-bold text-center text-2xl py-10">
            No hay articulos disponibles...
          </h2>
        )}

        <section className="container mx-auto">
          <h2 className="mb-5 text-4xl font-bold lg:text-center">
            Ultimos articulos
          </h2>
          <FilterSeccionPost filter={filter} setFilter={setFilter} />
          <div className="pb-20 mx-2">
            {loading && <Spinner />}
            {postsFacebook && (
              <div className="animate__animated animate__fadeIn flex flex-col gap-5">
                {postsFacebook?.map((post) => (
                  <PostFacebook key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
