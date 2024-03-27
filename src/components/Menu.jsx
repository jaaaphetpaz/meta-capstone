import React from "react";
import recipes from "../recipes";

const Menu = () => {
  return (
    <section id="menu">
      <div className="menu-container">
        <h2 className="menu-title">This weeks specials!</h2>
        <div className="cards">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="menu-items">
              <img src={recipe.image} alt="" />
              <div className="menu-content">
                <div className="heading">
                  <h5>{recipe.title}</h5>
                  <p>${recipe.price}</p>
                </div>
                <p>{recipe.description}</p>
                <button className="orderbtn">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
