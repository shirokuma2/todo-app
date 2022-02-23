import React, { useState } from 'react';
import { Task } from '../Types';

type Props = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({tasks, setTasks}) => {
  const [inputTitle, setInputTitle] = useState("")
  // 一意なidを生成するために利用している(本番ではただの連番なので利用不可)
  const [count, setCount] = useState(tasks.length + 1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // inputの値を受け取る
    setInputTitle(e.target.value)
  }

  const handleSubmit = () => {
    setCount(count + 1)

    const newTask: Task = {
      id: count,
      title: inputTitle,
      done: false
    }
    // リストの一番上に最新タスクを追加していく
    setTasks([newTask, ...tasks])
    
    setInputTitle("")
  }

  return (
    <div className='input-form'>
      <div className='inner'>
        <input 
          type="text"
          className='input'
          value={inputTitle}  // stateで管理するv-modelと類似
          onChange={handleInputChange}  // 変更をトリガーにする
         />
         <button onClick={handleSubmit} className='btn is-primary'>追加</button>
      </div>
    </div>
  )
}

export default TaskList;
