import React, { useState, useEffect } from 'react';
import '../src/index.css';

const App = () => {
  const [todo, setTodo] = useState(null); 
  const [loading, setLoading] = useState(true); 

  const fetchTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())  
      .then(json => {
        setTodo(json);  
        setLoading(false);  
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTodo();
  }, []); 

  return (
    <div>
      <header className="flex justify-between item-center w-full bg-pink-200">
        <div className="logo w-40 h-10 bg-cover bg-center"></div>
        <input class="p-2 rounded"type="text" placeholder="Search..." />
        <nav className="nav-links flex">
          <a href="#">What to Cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occasions</a>
          <a href="#">About Us</a>
        </nav>
        <button>Your Recipe Box</button>
        <div className="avatar w-10 h-10 bg-cover bg-center ml-4"></div>
      </header>
      <div className='upmain mt-8'>
        <h1 class="big">Emma Gonzalez's Recipe Box</h1>
      </div>
      <main>
        <div className='left'>
          <div className='avatar-1 w-40 h-40 bg-cover bg-center '>
          </div>
        </div>
        <div className='right'>
          <p>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights. </p>
          <div className='sub'>
            <a href="#">6.5k Subscribes</a>
            <button>Share</button>
          </div>
        </div>
      </main>

      <div className='menu'>
        <nav className="nav-links">
          <a href="#">Saved recipe</a>
          <a href="#">Folders</a>
          <a href="#">Recipes by Gerneieve</a>
        </nav>
      </div>

      <div class="menu-image">
  <div class="image-row">
    <div class="image-box">
      <div class="image-info">
        <h3 class="image-title">Dish 1</h3>
        <p class="image-time">32 mins</p>
      </div>
    </div>
    <div class="image-box">
      <div class="image-info">
        <h3 class="image-title">Dish 2</h3>
        <p class="image-time">32 mins</p>
      </div>
    </div>
    <div class="image-box">
      <div class="image-info">
        <h3 class="image-title">Dish 3</h3>
        <p class="image-time">32 mins</p>
      </div>
    </div>
    <div class="image-box">
      <div class="image-info">
        <h3 class="image-title">Dish 4</h3>
        <p class="image-time">32 mins</p>
      </div>
    </div>
  </div>
  <div class="image-row">
    <div class="image-box">
      <div class="image-info">
        <h3 class="image-title">Dish 5</h3>
        <p class="image-time">32 mins</p>
      </div>
    </div>
    <div class="image-box">
      <div class="image-info">
        <h3 class="image-title">Dish 6</h3>
        <p class="image-time">32 mins</p>
      </div>
    </div>
    <div class="image-box">
      <div class="image-info">
        <h3 class="image-title">Dish 7</h3>
        <p class="image-time">32 mins</p>
      </div>
    </div>
    <div class="image-box">
      <div class="image-info">
        <h3 class="image-title">Dish 8</h3>
        <p class="image-time">32 mins</p>
      </div>
    </div>
  </div>
</div>
      <footer>
        <div className="footer-section text-left">
          <h1 class="big">About us</h1>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <div className="info flex items-center ">
            <input type="email" placeholder="Enter your email" className="email p-2 rounded" />
            <button>Send</button>
          </div>
          <div className="info-2 mt-12 flex items-center">
            <div className="logo w-40 h-10 bg-cover bg-center"></div>
            <p>2023 Chefify company</p>
            <p>Terms of Service | Privacy Policy</p>
          </div>
        </div>

        <div className="footer-section">
          <h3 class="text-2xl font-bold md-2">Learn More</h3>
          <ul>
            <li><a href="#">Our Cooks</a></li>
            <li><a href="#">See Our Features</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>

          <h3>Shop</h3>
          <ul>
            <li><a href="#">Gift Subscription</a></li>
            <li><a href="#">Send Us Feedback</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Recipes</h3>
          <ul>
            <li><a href="#">What to cook this week</a></li>
            <li><a href="#">Pasta</a></li>
            <li><a href="#">Dinner</a></li>
            <li><a href="#">Healthy</a></li>
            <li><a href="#">Vegetarian</a></li>
            <li><a href="#">Vegan</a></li>
            <li><a href="#">Christmas</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
