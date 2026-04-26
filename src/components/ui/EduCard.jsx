export default function EduCard({ title, inst, date }) {
  return (
    <div className="edu-card">
      <h3>{title}</h3>
      <p className="edu-inst">{inst}</p>
      <p className="edu-date">{date}</p>
    </div>
  );
}
