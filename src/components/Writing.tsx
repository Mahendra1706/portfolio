import { WritingEntry } from '../types/portfolio';

interface WritingProps {
  entries: WritingEntry[];
}

export default function Writing({ entries }: WritingProps) {
  return (
    <section id="writing" className="section" aria-label="Writing and research notes">
      <p className="section__label">Writing & Notes</p>
      {entries.length > 0 ? (
        <div>
          {entries.map((entry, i) => (
            <div key={i} className="writing-entry">
              <h3 className="writing-entry__title">{entry.title}</h3>
              <p className="writing-entry__description">{entry.description}</p>
              <div className="writing-entry__meta">
                <span className="writing-entry__platform">{entry.platform}</span>
                {entry.date && (
                  <span className="writing-entry__platform">{entry.date}</span>
                )}
                {entry.url && (
                  <a
                    className="writing-entry__link"
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read on {entry.platform} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="writing-cta">
          More writing coming soon. In the meantime, find my notes on{' '}
          <a href="https://dev.to/mahendra4" target="_blank" rel="noopener noreferrer">
            Dev.to
          </a>.
        </p>
      )}
    </section>
  );
}
