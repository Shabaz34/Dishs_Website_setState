import React, { Component } from "react";
import Recipes from "../Functional Comp/Recipes";

const recipesArr = [
  {
    img: "https://hot-thai-kitchen.com/wp-content/uploads/2021/10/Untitled-design-5.jpg",
    name: "Pad Thai",
    description:
      "authentic pad thai sauce is actually very simple. There are technically only 3 ingredients: the sweet, the salty and the sour. But because we want this to be a time-saver, I've also add the shallots and the garlic into the sauce so we don't have to chop and sauté them on the day",
    indx: 1,
  },
  {
    img: "https://i.pinimg.com/564x/6f/b9/2c/6fb92c21ecb7a361b6e5e121bcd5a33d.jpg",
    name: "Sushi",
    description:
      "Sushi is a Japanese dish of prepared vinegared rice (鮨飯, sushi-meshi), usually with some sugar and salt, accompanied by a variety of ingredients",
    indx: 2,
  },
  {
    img: "https://img.mako.co.il/2017/11/19/AMIRMENCHEM_i.jpg",
    name: "Kobe",
    description:
      "Red Red Beet Lakuba, which combines the flavors of juicy meatballs in a haloumi dough wrapper, cooked in a rare red beetroot sauce",
    indx: 3,
  },
];

export default class MyKitchen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myRecipes: recipesArr,
      myRecipesNum: recipesArr.length,
      newResDone: [],
    };
  }
  SendImg2Done = (indx) => {
    let newResEat = this.state.myRecipes.filter(
      (resipeFilt) => resipeFilt.indx !== indx
    );
    let newRes = [...this.state.newResDone];
    newRes.push(recipesArr[indx - 1]);

    this.setState({ newResDone: newRes });

    this.setState({ myRecipes: newResEat });
    this.setState({ myRecipesNum: newResEat.length - 1 });
  };

  goToEatFunc = (indx) => {
    let newRes = this.state.newResDone.filter(
      (resipeFilt) => resipeFilt.indx !== indx
    );

    let newResEat = [...this.state.myRecipes];
    newResEat.push(recipesArr[indx - 1]);

    this.setState({ newResDone: newRes });

    this.setState({ myRecipes: newResEat });
  };

  render() {
    if (this.state.newResDone.length == 0) {
      return (
        <div>
          <h2>Wellcome to MyKitchen</h2>
          <h3>Number of recipes ready to eat: {this.state.myRecipes.length}</h3>
          <Recipes
            myRecipes={this.state.myRecipes}
            SendImg2DoneTop2Kit={this.SendImg2Done}
            che={0}
          />
        </div>
      );
    } else
      return (
        <div>
          <h2>Wellcome to MyKitchen</h2>
          <h2>Recipe Made</h2>
          <h3>Number of recipes ready to eat: {this.state.myRecipes.length}</h3>
          <Recipes
            myRecipes={this.state.myRecipes}
            SendImg2DoneTop2Kit={this.SendImg2Done}
            che={0}
          />
          <h3>Number of recipes Done: {this.state.newResDone.length}</h3>

          <Recipes
            myRecipes={this.state.newResDone}
            SendImg2DoneTop2Kit={this.goToEatFunc}
            che={1}
          />
        </div>
      );
  }
}
