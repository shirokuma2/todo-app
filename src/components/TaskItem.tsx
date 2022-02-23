import React from 'react';
import {Task} from '../Types';

type Props = {
  task: Task
  handleDone: (task: Task) => void
  handleDelet: (task: Task) => void
}

const TaskItem: React.FC<Props> = ({task, handleDone, handleDelet}) => {
  return (
    <li className={task.done ? "done" : ""}>
      <label>
        <input type="checkbox" className='checkbox-input' 
        onClick={() => handleDone(task)}
        defaultChecked={task.done}
        />
        <span className='checkbox-label'>{task.title}</span>
      </label>
      <button className='btn is-delete'
      onClick={() => handleDelet(task)}
      >削除</button>
    </li>
  )
}

export default TaskItem;
