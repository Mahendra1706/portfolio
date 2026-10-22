interface InterestsProps {
  interests: string[];
}

export default function Interests({ interests }: InterestsProps) {
  return (
    <section className="section" aria-label="Technical interests">
      <p className="section__label">Technical Interests</p>
      <div className="interests-list">
        {interests.map((interest) => (
          <span key={interest} className="interest-item">{interest}</span>
        ))}
      </div>
    </section>
  );
}
