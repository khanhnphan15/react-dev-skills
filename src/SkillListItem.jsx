import "./SkillListItem.css";

export default function SkillListItem({ skill }) {
    // Application logic, etc. goes here
    return (
        <div className="SkillListItem">
            {skill.name}
        
            <div className="level">
                LEVEL {skill.level}
            </div>
        </div>
    );
}