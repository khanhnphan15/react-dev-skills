import SkillListItem from "./SkillListItem";
import './SkillList.css';
export default function SkillList({ skills }) {
 
  const skillComponents = skills.map(skill => <SkillListItem skill={skill} />)
  // Application logic, etc. goes here
  return (
    <div className="SkillList">
      {skillComponents} 
    </div>
  );
}