import React, { useState } from "react";
import recipes from "./recipe";
import "../src/index.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedRecipes = recipes.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="font-sans">
      <header className="flex justify-between items-center w-full p-4 bg-pink-100">
        <div
          className="w-36 h-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/chefify.png')" }}
        ></div>
        <input
          type="text"
          placeholder="Search..."
          className="w-96 p-2 border border-gray-300 rounded"
        />
        <nav className="flex gap-8 text-gray-800 font-bold">
          <a href="#">What to Cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occasions</a>
          <a href="#">About Us</a>
        </nav>
        <button className="bg-pink-500 text-white px-4 py-2 rounded">
          Your Recipe Box
        </button>
        <div
          className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/avatar.png')" }}
        ></div>
      </header>

      <div className="mt-8 text-3xl ml-6">Emma Gonzalez's Recipe Box</div>

      <main className="flex w-4/5 mx-auto mt-4">
        <div
          className="w-20 h-20 rounded-full bg-gray-300 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/avatar.png')" }}
        ></div>
        <div className="flex-1 ml-10 text-lg">
          <p>
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise
            as a former cooking editor at The Los Angeles Times. She is also an
            accomplished author, contributing to numerous cookbooks and food
            publications. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of culinary delights.
          </p>
          <div className="flex gap-6 mt-4">
            <a href="#" className="text-pink-500">
              6.5k Subscribes
            </a>
            <button className="bg-pink-500 text-white px-4 py-2 rounded">
              Share
            </button>
          </div>
        </div>
      </main>

      <div className="flex w-4/5 mx-auto mt-4">
        <nav className="flex gap-6">
          <a href="#">Saved recipe</a>
          <a href="#">Folders</a>
          <a href="#">Recipes by Gerneieve</a>
        </nav>
      </div>

      <div className="w-4/5 mx-auto grid grid-cols-4 gap-4 my-6">
        {selectedRecipes.map((recipe, index) => (
          <div
            key={index}
            className="relative w-full h-48 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${recipe.image})` }}
          >
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 p-2 text-white rounded-md w-11/12">
              <h3 className="text-lg font-bold">{recipe.name}</h3>
              <p className="text-sm">{recipe.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2 mr-8">
        <button
          className={`px-4 py-2 rounded ${
            currentPage === 1 ? "bg-gray-300" : "bg-pink-500 text-white"
          }`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1
                ? "bg-pink-600 text-white"
                : "bg-pink-500 text-white"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-pink-500 text-white"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

      <footer className="flex justify-between items-start w-full bg-gray-900 text-white p-6 mt-8">
        <div>
          <h1 className="text-xl font-bold">About us</h1>
          <p>
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>
          <div className="flex gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-white text-black"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded">
              Send
            </button>
          </div>
          <div className="info-2 mt-12 flex items-center gap-6">
            
            <div
              className="w-36 h-10 bg-cover bg-center"
              style={{ backgroundImage: "url('/image/chefify.png')" }}
            ></div>
            <p className="ml-4">Terms of Service | Privacy Policy</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold">Learn More</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#">Our Cooks</a>
            </li>
            <li>
              <a href="#">See Our Features</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <h3 className="text-lg font-bold">Shop</h3>
            <li>
              <a href="#">Gift Subcriptions</a>
            </li>
            <li>
              <a href="#">Send us feedback</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Recipes</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#">What to cook this week</a>
            </li>
            <li>
              <a href="#">Pasta</a>
            </li>
            <li>
              <a href="#">Dinner</a>
            </li>
            <li>
              <a href="#">Healthy</a>
            </li>
            <li>
              <a href="#">Vegetarian</a>
            </li>
            <li>
              <a href="#">Vegan</a>
            </li>
            <li>
              <a href="#">Christmas</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
