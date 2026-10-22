import { Education as EducationType } from '../types/portfolio';
import { GraduationCap, LocationPin } from './Icons';

interface EducationProps {
  education: EducationType;
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="section education-section" aria-label="Education and background">
      <p className="section__label">Academic Foundation</p>
      <div className="education-card">
        <div className="education-card__icon" aria-hidden="true">
          <GraduationCap />
        </div>
        <div className="education-card__content">
          <div className="education-card__header">
            <div>
              <h3 className="education-card__degree">{education.degree}</h3>
              <p className="education-card__institution">{education.institution}</p>
            </div>
            <span className="education-card__period">{education.period}</span>
          </div>

          <div className="education-card__meta">
            <span className="education-card__location">
              <LocationPin />
              {education.location}
            </span>
            <span className="education-card__focus">Focus: {education.focus}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
