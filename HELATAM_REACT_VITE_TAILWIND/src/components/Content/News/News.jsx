import { TopArticle } from "./TopArticle"

const News = () => {
  return (
    <div className="relative bottom w-screen h-full overflow-clip">
        <TopArticle/>
        <div className="absolute w-[calc(100%_+_500px)] h-[300px] bg-gradient-to-t from-black via-[#000000ec] to-transparent -left-48 bottom-0"/>
    </div>
  )
}

export default News