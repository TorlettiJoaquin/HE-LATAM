import { convertData } from "../../helpers/convertData";

export const PostFacebook = ({post}) => {
  return (
    <a
      key={post.id}
      className="bg-thrid p-4 flex gap-5 h-[200px] lg:w-[1000px] lg:mx-auto hover:scale-105 transition-all"
      href={post.link}
      target="__blank"
    >
      <div className="w-1/6 overflow-hidden">
        <img
          src={
            post.photo !== ""
              ? post.photo
              : "https://i.postimg.cc/g2CJtxhb/1694461214812.jpg"
          }
          alt={post.message}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="text-2xl">
          {post.message !== "" ? post.message : "No hay descripción"}
        </h2>
        <span className="text-sm">{convertData(post.time)}</span>
      </div>
    </a>
  );
};
