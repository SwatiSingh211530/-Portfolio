const HeroImage = () => {
  return (
    <div className="relative self-end h-full w-full items-center justify-center">
      <div className="h-full w-full">
        <img
          src="/images/HexaPic.jpg" // fixed path, must be in public/images
          alt="Swati Singh"
          className="w-auto h-auto md:max-w-[570px] sm:max-w-[380px] absolute bottom-0 z-10 left-1/2 -translate-x-1/2"
        />

        {/* Orange spinning circle */}
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center">
          <div className="w-[600px] h-[600px] rounded-full border-[6px] border-orange opacity-70 animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Orange blurred spinning circle */}
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center">
          <div className="w-[600px] h-[600px] rounded-full border-[6px] border-orange opacity-70 blur-lg animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Cyan spinning circle */}
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center">
          <div className="w-[600px] h-[600px] rounded-full border-[6px] border-cyan opacity-70 animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Cyan blurred spinning circle */}
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center">
          <div className="w-[600px] h-[600px] rounded-full border-[6px] border-cyan opacity-70 blur-lg animate-[spin_20s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
