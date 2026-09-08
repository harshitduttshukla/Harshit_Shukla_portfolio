type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-sub">{description}</p> : null}
    </header>
  );
}
