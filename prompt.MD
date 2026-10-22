# MASTER PROMPT — MINIMALIST ENGINEER & AI RESEARCH PORTFOLIO

Act as a senior product designer, experienced frontend engineer, and design-conscious technical architect.

Your task is to design and implement a complete, polished personal portfolio website for an AI/ML engineer and full-stack developer.

Do not create a generic developer portfolio. The website should feel personal, intellectually curious, understated, professional, and technically credible.

The goal is to communicate: this person builds real systems, studies how they work internally, experiments with AI, and cares about engineering quality.

## 1. DESIGN PHILOSOPHY

Use a minimalist editorial design inspired by clean personal websites maintained by researchers, engineers, and technically minded builders.

The visual language should be:
- Minimal, calm, elegant, and highly readable.
- Warm off-white rather than pure white.
- Near-black typography rather than harsh pure black everywhere.
- Generous whitespace and a clear typographic hierarchy.
- Editorial layouts with simple alignment and restrained visual elements.
- Technical without looking like a fake terminal.
- Professional without looking like a corporate agency website.
- Personal without becoming an overdesigned personal-brand landing page.

The site must feel deliberately designed by a human with good taste.

Avoid the recognizable aesthetic of AI-generated websites.

## 2. STRICT VISUAL CONSTRAINTS

DO NOT USE:
- Neon colors or neon gradients.
- Purple-blue AI gradients.
- Glowing buttons, borders, or text.
- Glassmorphism.
- Excessive rounded cards.
- Huge gradient hero sections.
- Floating 3D objects.
- Particle backgrounds.
- Animated blobs.
- Artificial dashboard interfaces.
- Unnecessary charts or skill percentage bars.
- Fake terminal windows as decoration.
- Excessive icons and emoji.
- Scroll-triggered animation on every element.
- Custom cursors or cursor-following effects.
- Constant motion or parallax.
- Generic AI-generated illustrations.
- A giant centered headline followed by three identical feature cards.
- Fake metrics, fake achievements, or fabricated testimonials.

If an element does not improve usability, communicate meaningful information, or strengthen the design, remove it.

## 3. COLOR SYSTEM

Create a consistent design token system.

Suggested palette:
- Main background: #F7F6F2
- Primary text: #20201E
- Secondary text: #77756F
- Subtle borders: #DEDDD6
- Muted surface: #EFEEE8
- Optional accent: muted olive #737B62

Use the accent color sparingly, such as for small labels, links, or an active navigation state.

The page should remain beautiful even if the accent color is removed.

Do not introduce additional accent colors without a strong reason.

## 4. TYPOGRAPHY

Use a restrained combination of typography.

Recommended direction:
- A high-quality sans-serif for the main interface and body text.
- An understated serif for occasional editorial emphasis, if it improves the composition.
- A monospace font for technical metadata, dates, tags, and small labels.

Possible font choices:
- Inter or Geist for sans-serif.
- Source Serif 4 for restrained serif accents.
- JetBrains Mono for technical details.

Prefer locally available or reliably loaded fonts with sensible fallbacks.

Avoid excessive font sizes, unnecessary uppercase headings, and decorative typography.

The typography should establish the visual hierarchy instead of relying on colored containers.

## 5. TECHNOLOGY STACK

Use:
- React.
- Vite.
- TypeScript.
- Tailwind CSS, using a version compatible with the installed project.
- Lucide React only where icons are genuinely useful.
- React Router only if multiple routes provide a real benefit.

First inspect the existing project structure and package configuration.

If the repository is empty, initialize a clean React + Vite + TypeScript application.

Do not unnecessarily replace working configuration or introduce heavy libraries.

Keep the architecture simple, reusable, maintainable, and easy to extend.

## 6. INFORMATION ARCHITECTURE

Build the website as a single-page portfolio with a clear flow and optional dedicated project detail pages if useful.

### A. Navigation

Create a very minimal navigation bar.

Left side:
- My name or a simple text-based personal wordmark.

Right side:
- About
- Projects
- Writing
- Contact

GitHub can appear as a subtle external link.

Requirements:
- Keep the navigation lightweight.
- Use a subtle bottom border only if it improves separation.
- No oversized pill navigation.
- No floating glass navigation.
- On mobile, ensure all navigation options remain accessible.

### B. Hero Section

The hero should immediately communicate who I am and what I work on.

Use left-aligned editorial typography rather than a generic centered startup hero.

Placeholder copy:

Name: [YOUR NAME]

Headline:
"Building systems at the intersection of AI and software."

Supporting text:
"I'm an AI/ML student and developer interested in understanding how intelligent systems work — from model internals and inference infrastructure to the applications built around them."

A second short line may mention full-stack engineering, open-source development, and technical research.

Primary link:
"Explore my work →"

Secondary link:
"Read my notes ↗"

Optional small availability label:
"Open to research internships and engineering opportunities"

Only show the availability label if it is accurate.

The hero must not contain a fake dashboard, animated orb, illustration, or oversized decorative visual.

Use whitespace and typography to create impact.

### C. About Section

Write a concise, thoughtful introduction that sounds like an actual engineer rather than a personal branding agency.

The content should communicate:
- My background in AI/ML and software development.
- My interest in understanding systems below the abstraction layer.
- My approach to learning through implementation, experimentation, and reading source code.
- My interest in AI infrastructure, LLM inference, machine learning, and full-stack systems.

Avoid exaggerated claims such as "visionary AI pioneer," "revolutionizing the future," or "expert in everything."

Do not invent employment history, academic achievements, research publications, or professional experience.

Use editable placeholder content wherever personal information needs confirmation.

### D. Selected Projects

This is the most important section of the website.

Display projects as clean editorial rows or understated project entries, not a grid of generic, identical cards.

Each project should contain:
- Project name.
- One- or two-sentence technical description.
- Relevant technology tags.
- Project status where useful.
- GitHub repository link.
- Live demo link if one exists.

Seed the portfolio with editable project data representing these areas:

1. Infernt — a personal inference-engine project exploring LLM inference, GPU computation, matrix multiplication, and attention implementation.

2. GGML Quantization Study — a technical exploration of low-bit quantization, including Q4_0, Q4_1, quantization scales, and quantization error.

3. AI Agent / Automation System — an automation project involving workflow orchestration, APIs, and AI-assisted processing.

4. Full-Stack Chat Application — a real-time chat application built using React, Node.js, Express, and MongoDB.

Treat these as editable content drafts, not claims that every feature is complete or production-ready.

Make project status and descriptions configurable from a single data file.

Do not invent repository URLs, deployment URLs, stars, users, benchmarks, or performance numbers.

If a URL is unknown, use an obvious placeholder that is easy to replace and do not render a broken external link.

Projects should be visually differentiated by their descriptions and technical focus, not by random colors or decorative illustrations.

### E. Technical Interests

Present technical interests in a simple typographic list or compact grouped layout.

Potential areas:
- LLM Inference and Serving
- Model Quantization
- GPU Computing and CUDA
- AI Agents and Tool Use
- Machine Learning Systems
- Full-Stack Development
- Open Source

These represent interests and areas of study, not necessarily claims of professional expertise.

Avoid skill bars, percentage ratings, and enormous technology-logo grids.

### F. Writing and Research Notes

Create a section for technical articles, research notes, and engineering explanations.

Each entry should support:
- Article title.
- Brief description.
- Publication date, if known.
- Publication platform.
- External URL.

Include configurable placeholders for:
- Dev.to
- GitHub README or technical notes
- Other blogs or publications

Never invent article titles, published research, or publication links.

If no articles exist yet, present a subtle invitation to explore my writing platform instead of displaying fake posts.

The section should make it easy to add new entries through a central data file.

### G. Open Source

Create a small section communicating that I learn by reading codebases, investigating issues, improving documentation, and contributing to open-source projects.

Include configurable GitHub profile and repository links.

Only display contributions that actually exist.

Do not fabricate merged pull requests, maintainership, or contributor statistics.

### H. Contact and Footer

End with a quiet, understated contact section.

Suggested headline:
"Interested in building something meaningful?"

Supporting text:
"I'm always interested in thoughtful conversations about AI systems, engineering, research, and open source."

Provide configurable links for:
- Email
- GitHub
- LinkedIn
- Dev.to
- X or another relevant platform

Use plain text links or restrained icons.

Footer:
- Name.
- Current year, calculated dynamically.
- A short phrase such as "Built with curiosity and care."

No giant CTA block, bright background, or animated footer.

## 7. INTERACTION AND ANIMATION

The site should be primarily static and fast.

Allowed:
- Subtle hover color changes.
- Underline transitions on links.
- A gentle opacity transition for selected interactions.
- Small, restrained section-entry transitions if they improve the experience.
- Smooth scrolling for in-page navigation when appropriate.

Motion should be brief, restrained, and nonessential.

Respect prefers-reduced-motion.

Do not delay content until animations finish.

Avoid animation libraries unless the project genuinely needs one.

The site must feel polished even when animations are disabled.

## 8. RESPONSIVE DESIGN

The website must work properly on:
- Mobile phones.
- Tablets.
- Laptops.
- Large desktop screens.

Requirements:
- Comfortable line lengths.
- Responsive typography.
- No horizontal overflow.
- Properly wrapped project metadata.
- Readable spacing on smaller screens.
- Accessible navigation and links.
- Touch-friendly interactive targets.

Do not simply shrink the desktop layout. Design the mobile experience intentionally.

## 9. ENGINEERING QUALITY

Organize the code using clear components, for example:

src/
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    Interests.tsx
    Writing.tsx
    OpenSource.tsx
    Contact.tsx
    Footer.tsx
  data/
    portfolio.ts
  types/
    portfolio.ts
  App.tsx
  main.tsx
  index.css

Adjust this structure if the existing application has a better established pattern.

Requirements:
- Keep content separate from presentation.
- Use TypeScript types for project and writing data.
- Create reusable components only where useful.
- Use semantic HTML.
- Use accessible color contrast.
- Add descriptive link text and accessible labels.
- Open external links safely.
- Ensure navigation anchors work.
- Avoid unnecessary dependencies.
- Avoid giant monolithic components.
- Avoid overengineering.
- Include useful page metadata and a favicon if practical.
- Add a sensible 404 page if dedicated routes are implemented.

## 10. PERFORMANCE AND SEO

Ensure:
- Fast initial rendering.
- Minimal JavaScript.
- No unnecessary network requests.
- No large background images.
- No layout shifts caused by fonts or images.
- A meaningful page title and meta description.
- Correct heading hierarchy.
- Appropriate Open Graph metadata.
- A basic robots.txt and sitemap if suitable for the chosen deployment.
- No console errors.

Do not add a backend or database for a static portfolio.

## 11. IMPLEMENTATION WORKFLOW

Follow this sequence:

1. Inspect the current workspace and existing files.
2. Establish the design tokens and typography.
3. Build the page structure and responsive layout.
4. Add realistic, editable placeholder content.
5. Implement working navigation and external links.
6. Check mobile responsiveness and accessibility.
7. Run the available build and lint checks.
8. Fix any errors you encounter.
9. Inspect the final rendered site using the available browser tools, if available.
10. Refine spacing, line lengths, alignment, hover states, and visual consistency.

Do not stop after generating a plan or mockup. Implement the working website.

If browser preview or screenshot tools are available, inspect the rendered result instead of assuming the design is correct.

If a command fails, diagnose the cause and fix it rather than hiding the error.

## 12. FINAL QUALITY BAR

Before finishing, ask:

- Does this look like a thoughtful engineer's personal website rather than an AI-generated template?
- Is the background warm and restrained?
- Is typography doing most of the design work?
- Are projects the focus?
- Does every visual element have a purpose?
- Is the website responsive and functional?
- Are all links real or clearly marked as editable placeholders?
- Have I avoided inventing achievements?
- Can I update projects and social links without editing multiple components?
- Does the site look credible to a research engineer, open-source maintainer, or technical hiring manager?

If the design feels generic, add personality through content, typography, composition, and real technical details — not through more effects.

Build the simplest excellent version first. Prioritize clarity, technical credibility, and maintainability over visual spectacle.


here some my configues and links:

AI/ML Engineer · Full-Stack Developer
https://github.com/Mahendra1706
https://www.linkedin.com/in/gurjarmahendra/
https://dev.to/mahendra4
mahendra.gurjar4@outlook.mail
https://huggingface.co/mahendra4