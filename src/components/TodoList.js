import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); // Clear the input field
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Liste des tâches</h1>
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Ajouter une tâche"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300"
          >
            Ajouter
          </button>
        </div>
        
        {/* Conditional rendering of the table */}
        {tasks.length > 0 && (
          <table className="min-w-full border-collapse bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4 border-b">Tâche</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-300">
                  <td className="py-2 px-4 border-b text-gray-700">{task}</td>
                  <td className="py-2 px-20 border-b">
                    <button
                      onClick={() => handleDeleteTask(index)}
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-md transition duration-300"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default TodoList;
