import SkillTag from '../ui/SkillTag';
import { skillsData } from '../../data/portfolioData';

export default function Skills() {
  return (
    <section className="skills section" id="habilidades">
      <div className="container">
        <h2 className="section-title">Habilidades e Tecnologias</h2>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <SkillTag
              key={index}
              name={skill.name}
              highlight={skill.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
