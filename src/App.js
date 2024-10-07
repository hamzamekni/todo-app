import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-400 to-blue-500">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4">
            <ul className="flex space-x-8 justify-center">
              <li className="relative group">
                <Link
                  to="/"
                  className="text-lg font-semibold text-gray-700 hover:text-blue-500 transition duration-300"
                >
                  Home
                </Link>
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
              <li className="relative group">
                <Link
                  to="/todos"
                  className="text-lg font-semibold text-gray-700 hover:text-blue-500 transition duration-300"
                >
                  Todo List
                </Link>
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
            </ul>
          </div>
        </nav>
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
