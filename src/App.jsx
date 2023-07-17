import { useState } from 'react'
import './App.css'
import SkillList from "./SkillList";
import NewSkillForm from './NewSkillForm';

// function App() {
//   const [count, setCount] = useState(0)


export default function App() {

  const [skills, setSkills] = useState([
    { name: "HTML", level: 'LEVEL 5' },
    { name: "CSS", level: 'LEVEL 3'},
    { name: "JavaScript", level: 'LEVEL 4' },
    { name: "Python", level: 'LEVEL 2' },
  ]);

  return (
    <div className="App">
      <h1>React Dev-Skills</h1>
      <SkillList skills={skills} />
      <NewSkillForm />
    </div>
  )

}
