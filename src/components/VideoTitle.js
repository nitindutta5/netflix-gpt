function VideoTitle({ title, overview }) {
  return (
    <div className="pt-40 pl-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-base w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-3 w-20 bg-gray-500 bg-opacity-60 rounded-lg mx-2">
          {" "}
           ▶️ {" "} Play
        </button>
        <button className="bg-white text-black py-2 px-3 w-25 bg-gray-500 bg-opacity-60 rounded-lg">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
