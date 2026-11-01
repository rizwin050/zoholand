export default function SectionHeading({ eyebrow, title, intro, align = 'left', as: Tag = 'h2', id }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <Tag id={id}>{title}</Tag>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </div>
  );
}
