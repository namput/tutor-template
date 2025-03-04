import { TutorData } from "../types";

interface Props {
  data: TutorData;
}

const HeroSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="flex flex-col items-center bg-red-500 text-white p-10">
      <img className="w-32 h-32 rounded-full border-4 border-white" src={data.profileImage} alt="Tutor" />
      <h1 className="text-4xl font-bold mt-4">{data.name}</h1>
      <p className="text-lg">{data.bio}</p>
    </section>
  );
};


export default HeroSection;
