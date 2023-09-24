import { useEffect, useMemo, useState } from "react";
import { Footer } from "../constant/Footer";
import { Navbar } from "../constant/Navbar";
import { PostFacebook } from "./components/PostFacebook";
import { Spinner } from "../components/Spinner/Spinner";
import { FilterSeccionPost } from "./components/FilterSeccionPost";

export const Guide = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    type: 0,
    text: ''
  })

  const postsFacebook = useMemo(() => {
    if (filter.type === 0 && filter.text.length === 0) {
      return posts
    }

    const filterType = filter.type === 0 ? posts : posts.filter(hero => hero.type == filter.type)
    const data = filterType.filter(post => {
      return post.features?.some(label => filter.text.includes(label.toLowerCase()));
    });

    return data

  }, [filter, posts])

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
      <main className="bg-primary">
        <h2 className="text-4xl text-center py-20 lg:py-28 lg:text-6xl">
          Portal de victoria
        </h2>
        <section className="container mx-auto">
          <h2 className="mb-5 text-4xl font-bold lg:text-center">
            Ultimos articulos
          </h2>
          <FilterSeccionPost filter={filter} setFilter={setFilter} />
          <div className="pb-20 mx-2">
            {loading && posts?.lenght && <Spinner />}
            {postsFacebook && (
              <div className="animate__animated animate__fadeIn flex flex-col gap-5">
                {postsFacebook?.map((post) => (
                  <PostFacebook key={post.id} post={post} />
                  ))}
              </div>
            )}
            {postsFacebook?.lenght === 0 && <h2 className="font-bold text-center text-2xl">No hay articulos disponibles</h2>}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
