import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender sobre HTML/CSS", finished: false },
    { id: 2, text: "Aprender React e useState", finished: false },
    { id: 3, text: "Entender Props e Data", finished: false },
    { id: 4, text: "Estudar mais a fundo React Components", finished: false },
  ]);

  const finishTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, finished: !task.finished } : task,
      ),
    );
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="tasks">
        {tasks.map((task) =>
          !task.finished ? (
            <div className="task" key={task.id}>
              <div className="content">
                <input
                  type="checkbox"
                  checked={task.finished}
                  onChange={() => finishTask(task.id)}
                />
                <p>{task.text}</p>
              </div>
            </div>
          ) : (
            ""
          ),
        )}
        <input type="text" id="addTask" onChange={() => addTask()} />
        <button className="addTask"> Adicionar Tarefa </button>
      </div>
    </div>
  );
}
