import TimelineItem from '../ui/TimelineItem';
import { experienceData } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section className="experience section" id="experiencia">
      <div className="container">
        <h2 className="section-title">Experiência Profissional</h2>
        <div className="timeline">
          {experienceData.map((item) => (
            <TimelineItem
              key={item.id}
              date={item.date}
              role={item.role}
              company={item.company}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
