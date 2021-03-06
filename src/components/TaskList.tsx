import React from 'react';
import TaskItem from './TaskItem';
import {Task} from '../Types';


type Props = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>  // stateの値を変更するsetのやつも親から渡せる
}

const TaskList: React.FC<Props> = ({tasks, setTasks }) => {

  const handleDone = (task: Task) => {
    setTasks(prev => prev.map(t => 
        t.id === task.id ? {...task, done: !task.done} : t
      ))
  }

  const handleDelet = (task: Task) => {

    setTasks(prev => prev.filter(t =>
        t.id !== task.id
      ))
  }

  const noTodo = "登録されたtodoはありません"
  const listItem = <ul className='task-list'>
    {
      tasks.map(task => (
        <TaskItem
        key={task.id}
        task={task}
        handleDone={handleDone}
        handleDelet={handleDelet}
        />
      ))
    }
  </ul>

  return (
    <div className='inner'>
      { tasks.length <= 0 ? noTodo : listItem }
    </div>
  )
}

export default TaskList;
