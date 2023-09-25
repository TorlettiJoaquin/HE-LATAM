import { useEffect, useMemo, useState } from "react"
import { Spinner } from "../components/Spinner/Spinner"
import { Footer } from "../constant/Footer"
import { Navbar } from "../constant/Navbar"
import { convertData } from "../helpers/convertData"
import { FilterSeccionPost } from "./components/FilterSeccionPost"
import { PostFacebook } from "./components/PostFacebook"

export const News = () => {
  const [posts, setPosts] = useState(null);
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
          const mock = result.posts.data.map((post) => {
            return {
              message: post.message ?? "",
              id: post.id,
              photo: post.full_picture ?? "",
              link: post.permalink_url ?? "",
              time: post.created_time,
            };
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
      <main className="bg-primary pt-28">
        {loading ? (
          <Spinner />
        ) : (
          <div className="container mx-auto lg:w-[1000px] grid grid-cols-3 mb-20 gap-6">
            {posts?.slice(0, 3).map((post) => (
              <a target="_blank" href={post.link}  key={post.id} className="bg-thrid border border-spacing-2 border-orange-700" rel="noreferrer">
                <img
                  src={
                    post.photo !== ""
                      ? post.photo
                      : "https://i.postimg.cc/g2CJtxhb/1694461214812.jpg"
                  }
                  alt={post.message}
                  className="object-cover"
                />
                <div className="py-4 px-2 flex flex-col justify-between">
                  <h2 className="font-bold line-clamp-1">{post.message}</h2>
                  <span className="text-sm">{convertData(post.time)}</span>
                </div>
              </a>
            ))}
          </div>
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
            {postsFacebook?.lenght === 0 && (
              <h2 className="font-bold text-center text-2xl">
                No hay articulos disponibles
              </h2>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
