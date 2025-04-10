import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get statred today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>

      <div className="flex mt-10 justify-center">
        <video
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-500 mx-2 my-4"
          autoPlay
          loop
          muted
          src={video1}
        />
        <video
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-500 mx-2 my-4"
          autoPlay
          loop
          muted
          src={video2}
        />
      </div>
    </div>
  );
};

export default HeroSection;
