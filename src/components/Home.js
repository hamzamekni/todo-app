import React from 'react';

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white tracking-wide drop-shadow-lg animate-fade-in-up">
          Bienvenue sur l'application de gestion des tâches
        </h1>
        <p className="mt-6 text-lg text-indigo-100 tracking-wide">
          Organisez et gérez vos tâches en toute simplicité
        </p>
        <button className="mt-8 bg-white text-indigo-600 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-100 transition duration-300 ease-in-out">
          Démarrer
        </button>
      </div>
    </div>
  );
}

export default Home;
