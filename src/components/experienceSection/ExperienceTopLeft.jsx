import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[320px]">
      <p className="text-orange font-bold uppercase text-2xl font-special text-center">
        Swati Singh
      </p>
      <p className="text-cyan-400 font-semibold text-center text-lg">
        Final Year B.Tech CSE Student
      </p>
      <p className="text-center text-base text-lightGrey">
        Passionate about software development and problem-solving. Hands-on experience in full-stack development and DSA.
      </p>
      <ExperienceInfo number="150+" text="DSA Problems Solved" />
      <ExperienceInfo number="560+" text="AMCAT Score" />
      <ExperienceInfo number="Semi-finalist" text="HackWithIndia 2024" />
    </div>
  );
};

export default ExperienceTopLeft;