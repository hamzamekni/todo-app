import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask } from './redux/todoSlice';

const App = () => {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleAddTask} style={{ padding: '5px 10px' }}>
          Add Task
        </button>
      </div>
      <ul style={{ marginTop: '20px' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(toggleTask(todo.id))}
              style={{ marginRight: '5px', padding: '5px 10px' }}
            >
              Toggle
            </button>
            <button
              onClick={() => dispatch(deleteTask(todo.id))}
              style={{ padding: '5px 10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
