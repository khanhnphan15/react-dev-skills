import './NewSkillForm.css';
import { useState } from 'react';

export default function NewSkillForm({ addSkill }) {
    // Application logic, etc. goes here
    const [newSkill, setNewSkill] = useState("");
    const [newLevel, setNewLevel] = useState(1);

    function handleAddSkill(evt) {
        evt.preventDefault();
        addSkill({
            name: newSkill,
            level: parseInt(newLevel),
        });
        setNewSkill("");
    }

    return (
        <div className="NewSkillForm">
            <form onSubmit={handleAddSkill}>
                <label>Skill</label>
                <input
                    value={newSkill}
                    onChange={(evt) => setNewSkill(evt.target.value)}
                    placeholder="New Skill"
                    required
                    pattern=".{3,}"

                />
                <label>Level</label>
                <select
                    value={newLevel}
                    onChange={(evt) => setNewLevel(evt.target.value)}
                    placeholder="New Level"
                    required
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button type="submit">ADD SKILL</button>
            </form>
        </div>
    );
}