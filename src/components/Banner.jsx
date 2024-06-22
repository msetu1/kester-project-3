const Banner = () => {
    return (
      <div className="">
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage: "url(https://i.ibb.co/KK9Sw4Y/banner-img-2.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-40 "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="pb-20">
              <button className="uppercase text-xl font-bold bg-red-800 opacity-40 mb-5 px-3 py-2 mt-48">
               Baseball Game
              </button>
              <h1 className="mb-5  lg:text-7xl md:text-7xl text-4xl font-bold uppercase">
                Exploring World <br /> of baseball
              </h1>
              
              <div className="flex items-center justify-center gap-3 mt-10">
                <a className="px-6 py-2 bg-black   font-bold text-xl text-white hover:bg-red-700">
                  OUR TEAM
                </a>
                <a className="px-6 py-2  bg-red-700  font-bold text-xl text-white hover:bg-black">
                  NEXT MATCH
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  