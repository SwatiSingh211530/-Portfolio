const HeroGradient = () => {
  return (
    <div>
      {/* Cyan glow */}
      <div className="w-[300px] h-[300px] rounded-full shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>

      <div className="w-[250px] h-[250px] rounded-full shadow-cyanMediumShadow absolute top-[5%] left-0 -z-10 opacity-50"></div>

      {/* Orange glow */}
      <div className="w-[300px] h-[300px] rounded-full shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse"></div>

      <div className="w-[250px] h-[250px] rounded-full shadow-orangeMediumShadow absolute top-[10%] left-0 -z-10 opacity-50"></div>
    </div>
  );
};

export default HeroGradient;
