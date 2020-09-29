import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="welcome">
          <div className="welcome-text">
              Chow Cheap is a user-friendly forum for food connoisseurs on a budget to share thier favourite recipes. Sign up for free and join the community!
            <br /><br />
            <button>Sign Up</button>
          </div>
      </div>
      <div className="main-element">
          <div className="subtitle">TOP RECIPES</div>
          <div className="recipe">
              <div>
                  <div className="recipe-name">Test Recipe 1</div>
                  <hr />
                  <div>Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description </div>
                  <br />
                  <button>View Recipe</button>
              </div>
              <img src="https://iconiclife.com/wp-content/uploads/2020/04/home-cooked-food-delivery-service-by-Matha-and-Marley.jpeg" alt="thumbnail" height="150px" width="250px"/>
          </div>
          <div className="recipe">
              <div>
                  <div className="recipe-name">Test Recipe 2</div>
                  <hr />
                  <div>Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description Test Description </div>
                  <br />
                  <button>View Recipe</button>
              </div>
              <img src="https://img.grouponcdn.com/deal/2iTm4PtuPqk644BEdNxxNqEqf3Cw/2i-1000x600/v1/c700x420.jpg" alt="thumbnail" height="150px" width="250px" />
          </div>
      </div>
      <div>Have your own recipe you want to share? <button className="post-button">Make a Post</button></div>
    </div>
  );
}

export default Home;