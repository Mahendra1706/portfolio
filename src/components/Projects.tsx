import { useState } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { ExternalArrow } from './Icons';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Systems & CUDA',
    'ML & Research',
    'Open Source & Tools',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section projects-section" aria-label="Selected engineering projects">
      <div className="section__header">
        <div>
          <p className="section__label">Selected Systems & Engineering</p>
          <h2 className="section__heading">Systems built from first principles.</h2>
        </div>
        <p className="section__subtext">
          Zero black-box abstractions. Real custom CUDA kernels, memory layouts, and quantitative measurements.
        </p>
      </div>

      {/* Recruiter Category Filter Tabs */}
      <div className="projects__filter-bar" role="tablist" aria-label="Project categories">
        {categories.map((cat) => {
          const count =
            cat === 'All'
              ? projects.length
              : projects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`filter-btn ${selectedCategory === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              <span>{cat}</span>
              <span className="filter-btn__count">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="projects-list">
        {filteredProjects.map((project) => (
          <article
            key={project.name}
            className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
          >
            <div className="project-card__top">
              <div className="project-card__title-group">
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__name">{project.name}</h3>
              </div>

              <div className="project-card__badges">
                {project.status && (
                  <span className={`status-pill ${project.status === 'Active' ? 'status-pill--active' : ''}`}>
                    {project.status === 'Active' && <span className="status-pill__dot" />}
                    {project.status}
                  </span>
                )}
              </div>
            </div>

            <p className="project-card__description">{project.description}</p>

            {/* Recruiter Impact & Hardware Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="project-card__metrics" aria-label="Key benchmarks and specifications">
                {project.metrics.map((metric) => (
                  <span key={metric} className="metric-pill">
                    <span className="metric-pill__icon">⚡</span>
                    {metric}
                  </span>
                ))}
              </div>
            )}

            {/* Engineering Highlights / Architecture bullets */}
            {project.highlights && project.highlights.length > 0 && (
              <ul className="project-card__highlights">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="project-card__highlight-item">
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="project-card__footer">
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card__actions">
                {project.github && (
                  <a
                    className="action-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Repository</span>
                    <ExternalArrow />
                  </a>
                )}
                {project.huggingface && (
                  <a
                    className="action-link action-link--hf"
                    href={project.huggingface}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Hugging Face Weights</span>
                    <ExternalArrow />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
