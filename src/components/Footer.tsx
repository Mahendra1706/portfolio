interface FooterProps {
  name: string;
  tagline: string;
}

export default function Footer({ name, tagline }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__left">
          © {year} {name}
        </span>
        <span className="footer__tagline">{tagline}</span>
      </div>
    </footer>
  );
}
