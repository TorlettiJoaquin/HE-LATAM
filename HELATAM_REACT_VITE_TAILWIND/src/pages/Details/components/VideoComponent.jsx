export const VideoComponent = ({id}) => {

  return (
    <div className="w-full">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}?si=_l4G5zMEG62NEkCC`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
