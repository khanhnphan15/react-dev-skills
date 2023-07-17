import SkillListItem from "./SkillListItem";
import './SkillList.css';
export default function SkillList({ skills }) {
  console.log('slgj');
  console.log(skills)
  console.log('ewitu');
  const skillComponents = skills.map(i => <SkillListItem skill={i} />)
  // Application logic, etc. goes here
  return (
    <div className="SkillList">
      {skillComponents} 
    </div>
  );
}