export default function SkillTag({ name, highlight }) {
  return (
    <span className={`skill-tag ${highlight ? 'highlight-tag' : ''}`}>
      {name}
    </span>
  );
}
