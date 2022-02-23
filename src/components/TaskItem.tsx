import React from 'react';
import {Task} from '../Types';

type Props = {
  handleDone: (task: Task) => void
  task: Task  // 順番は関係ない
  handleDelet: (task: Task) => void

}

const TaskItem: React.FC<Props> = ({task, handleDone, handleDelet}) => {

  const checkStyle = task.done ? "done" : ""  // class名の制御
  return (
    <li className={checkStyle}>
      <label>
        <input type="checkbox" className='checkbox-input' 
        onClick={() => handleDone(task)}  // 関数に引数があるためarrow記述
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
