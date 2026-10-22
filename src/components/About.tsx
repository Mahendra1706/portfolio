interface AboutProps {
  paragraphs: string[];
}

export default function About({ paragraphs }: AboutProps) {
  return (
    <section id="about" className="section about" aria-label="About">
      <p className="section__label">About</p>
      {paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </section>
  );
}
