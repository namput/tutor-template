import { TutorData } from "../types";

interface Props {
  data: TutorData;
}

const ContactSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="p-10 bg-gray-200 text-center">
      <h2 className="text-xl font-bold">📞 ติดต่อ</h2>
      <p>📧 Email: {data.email}</p>
      <p>📍 ที่อยู่: {data.location}</p>
      <p>📞 โทร: {data.phone}</p>
    </section>
  );
};

export default ContactSection;
