import mapVideo from '../../../assets/video/mapvideo.webm'

const MapInteractivo = () => {
  return (
    <div className="h-full pb-10 lg:pb-20 relative">
      <div className="relative w-full h-[500px] lg:h-[800px] lg:top-16">
        <video src={mapVideo} autoPlay muted loop className='w-full h-full relative aspect-video object-cover'></video>
        <h1 className='absolute z-10 inset-x-0 top-1/4 text-center text-4xl xl:text-5xl font-extrabold tracking-widest bg-gradient-to-b from-orange-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-glow font-garamond px-5'>Ingresa al <br /> CAMPO DE BATALLA</h1>
      </div>
      <div className="absolute right-0 top-0 left-0 bottom-0 h-full mx-auto bg-gradient-to-b from-black via-transparent to-black" />
    </div>
  )
}

export default MapInteractivo