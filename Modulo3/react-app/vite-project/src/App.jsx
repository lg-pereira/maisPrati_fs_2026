import { useState } from 'react'



export default function App() {

  const [tasks, setTasks] = useState([
    {id: 1, text: "Aprender sobre HTML/CSS", finished: true},
    {id: 2, text: "Aprender React e useState", finished: false},
    {id: 3, text: "Entender Props e Data", finished: true},
    {id: 4, text: "Estudar mais a fundo React Components", finished: false},
  ])

  const [text, setTask] = useState('')
  const [number, setId] = useState(0)


  return (
    <div>
      <h2>Tarefas Pendentes </h2>
      <ol>
        {tasks
          .map((task) =>
          <li key={task.id}>{task.finished ? <span>✅</span> : <span>❌</span>} {task.text}</li>
        )}
      </ol>
      
    </div>
  )
}