function SkillList({src, skill}) {
  return (
    <span>
    <img src={src} alt="Checmark Icon" />
    <p>{skill}</p>
</span>
  );
}

export default SkillList;