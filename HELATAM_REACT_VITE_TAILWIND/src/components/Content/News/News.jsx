import { TopArticle } from "./TopArticle"

const News = () => {
  return (
    <div className="relative bg-black top-0">
        <div className="absolute inset-0 bg-black overflow-hidden h-[150px] blur-xl"></div>
        <TopArticle/>
        <div className="absolute inset-x-0 bottom-0 h-[150px] bg-black blur-xl"></div>
    </div>
  )
}

export default News