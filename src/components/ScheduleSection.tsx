import { TutorData } from "../types";

interface Props {
  data: TutorData;
}

const ScheduleSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-xl font-bold">📆 ตารางสอน</h2>
      <ul>
        {data.schedule.map((item, index) => (
          <li key={index} className="mt-2">{item.day}: {item.time}</li>
        ))}
      </ul>
    </section>
  );
};

export default ScheduleSection;
