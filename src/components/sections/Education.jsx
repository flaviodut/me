import EduCard from '../ui/EduCard';
import { educationData, certificationsData } from '../../data/portfolioData';

export default function Education() {
  return (
    <section className="education section" id="educacao">
      <div className="container">
        <h2 className="section-title">Educação e Certificações</h2>
        <div className="grid-2-cols">
          {educationData.map((edu) => (
            <EduCard
              key={edu.id}
              title={edu.title}
              inst={edu.inst}
              date={edu.date}
            />
          ))}
          <div className="edu-card certs">
            <h3>Certificações de destaque</h3>
            <ul className="cert-list">
              {certificationsData.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
