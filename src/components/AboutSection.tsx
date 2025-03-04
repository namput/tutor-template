import { TutorData } from "../types";

interface Props {
  data: TutorData;
}

const AboutSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-xl font-bold">🧑‍🏫 เกี่ยวกับติวเตอร์</h2>
      <p>{data.bio}</p>
      <p className="mt-2 font-semibold">📍 ที่อยู่: {data.location}</p>
    </section>
  );
};

export default AboutSection;
