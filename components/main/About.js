function About() {
  return (
    <div
      id="about"
      className="w-full text-center md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your average developer</p>
          <p className="py-2 text-gray-600">
            After finishing school, I worked as an entrepreneur, successfully
            operating in the production and trade of flowers.
          </p>
          <p className="py-2 text-gray-600">
            With the expansion of business, the need for internet business also
            appeared. I&apos;m starting to be interested in how I can present my
            business on the Internet and I&apos;m slowly becoming more and more
            familiar with programming, learning programming languages, building
            applications and adapting them to the market and marketing needs
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src="/images/about.jpg" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
