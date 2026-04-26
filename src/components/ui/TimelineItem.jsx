export default function TimelineItem({ date, role, company, description }) {
  return (
    <article className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        {date && <span className="timeline-date">{date}</span>}
        <h3 className="timeline-role">{role}</h3>
        {company && <h4 className="timeline-company">{company}</h4>}
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>
    </article>
  );
}
