import { SkillGroup } from '../types/portfolio';

interface SkillsProps {
  skillGroups: SkillGroup[];
  interests: string[];
}

export default function Skills({ skillGroups, interests }: SkillsProps) {
  return (
    <section id="skills" className="section skills-section" aria-label="Technical skills and competencies">
      <div className="section__header">
        <div>
          <p className="section__label">Technical Matrix</p>
          <h2 className="section__heading">Core Competencies & Technologies</h2>
        </div>
        <p className="section__subtext">
          Targeted for high-performance AI systems, GPU computing, and machine learning infrastructure.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group-card">
            <h3 className="skill-group-card__title">{group.category}</h3>
            <div className="skill-group-card__badges">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-research-areas">
        <h3 className="skills-research-areas__title">Focus & Active Research Areas</h3>
        <div className="interests-list">
          {interests.map((interest) => (
            <span key={interest} className="interest-item">
              <span className="interest-item__bullet">•</span>
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
