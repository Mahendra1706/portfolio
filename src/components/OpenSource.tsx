interface OpenSourceProps {
  githubUrl: string;
}

export default function OpenSource({ githubUrl }: OpenSourceProps) {
  return (
    <section className="section open-source" aria-label="Open source contributions">
      <p className="section__label">Open Source</p>
      <p>
        I learn by reading codebases, investigating issues, and building tools
        that solve problems I've encountered. I've released MemTrace, an
        open-source Python library for diagnosing AI agent memory failures, and
        I contribute to projects where I can help improve documentation, fix
        bugs, or add meaningful features.
      </p>
      <p>
        Most of my technical learning happens in the open — my repositories
        include inference engines, quantization studies, and experiments with
        model architectures.
      </p>
      <a
        className="open-source__link"
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View my GitHub profile ↗
      </a>
    </section>
  );
}
