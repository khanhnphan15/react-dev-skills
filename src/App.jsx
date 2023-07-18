import { useState } from 'react'
import './App.css'
import SkillList from "./SkillList";
import NewSkillForm from './NewSkillForm';

// function App() {
//   const [count, setCount] = useState(0)


export default function App() {

  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  const [showSkills, setShowSkills] = useState(true);
  //add thhis function
  function addSkill(skill) {
    //replace state, don't mutate it
    setSkills([...skills, skill]);
  }


  return (
    <div className="App">
      <h1>React Dev-Skills</h1>
      <SkillList skills={skills} />
      <NewSkillForm addSkill={addSkill}/>
    </div>
  )

}
