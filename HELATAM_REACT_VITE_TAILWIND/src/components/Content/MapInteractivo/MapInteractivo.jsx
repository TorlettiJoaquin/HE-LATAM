import mapVideo from '../../../assets/video/mapvideo.webm'

const MapInteractivo = () => {
  return (
    <div className="h-full pb-10 lg:pb-16">
      <div className="absolute top-0 w-full h-[100px] bg-gradient-to-b from-black via-[#000000b4] to-transparent"></div>
      <div className="relative w-full h-[500px] lg:h-[800px] lg:top-16">
        <video src={mapVideo} autoPlay muted loop className='w-full h-full relative aspect-video object-cover'></video>
      </div>

    </div>
  )
}

export default MapInteractivo