import { TutorData } from "../types";

interface Props {
  data: TutorData;
}

const CourseSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-xl font-bold text-center">📚 คอร์สเรียน</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {data.courses.map((course, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md bg-white">
            <h3 className="font-bold text-lg">{course.name}</h3>
            <p>{course.details}</p>
            <p>💰 ราคา: {course.price} บาท | ⏳ ระยะเวลา: {course.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
