import React from "react";
import Recipe from "../Class Comp/Recipe";
import "../App.css";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>;

export default function Recipes(props) {
  const SendImg2DoneTop = (indx) => {
    props.SendImg2DoneTop2Kit(indx);
  };

  let recipesStr = props.myRecipes.map((recipe, ind) => {
    return (
      <Recipe
        cheN={props.che}
        img={recipe.img}
        name={recipe.name}
        description={recipe.description}
        indx={recipe.indx}
        key={ind}
        SendImg2Done={SendImg2DoneTop}
        goToEatFunc={SendImg2DoneTop}
      />
    );
  });
  return <div className="row dishRow">{recipesStr}</div>;
}
