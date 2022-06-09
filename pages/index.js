const Home = () => {
  return (
    <>
      <div className="container h-[45vh] flex flex-col justify-end">
        <h1 className="text-indigo-900 text-3xl mb-2">
          Alabama&apos;s Premier <strong>Custom Home Builder</strong>
        </h1>
        <h2 className="text-gray-700 font-sans font-light">
          Lorem ipsum dolor sit amet consectetor adpiscing elit sed do eiusmod
        </h2>
        <div className="flex mt-6 mb-24">
          <button className="flex flex-1 mr-2 justify-center items-center border-2 border-indigo-900 text-indigo-900 px-5 py-[5px] font-semibold text-lg rounded hover:bg-indigo-800 hover:scale-105 duration-150">
            Our process
          </button>
          <button className="flex flex-1 ml-2 justify-center items-center bg-indigo-900 text-white px-5 py-[5px] font-semibold text-lg rounded hover:bg-indigo-800 hover:scale-105 duration-150">
            Let&apos;s Talk
          </button>
        </div>
      </div>
      <div className="w-screen container bg-indigo-900 flex flex-col justify-center">
        <video
          className="-mt-8 rounded-lg mb-8"
          controls
          src="/stock.mov"
        ></video>
        <h3 className="text-white text-xl mb-2">
          Discover <strong>Our Difference</strong>
        </h3>
      </div>
    </>
  );
};

export default Home;
