import React, { Component } from 'react';
import Ingredient from './Ingredient';

class Recipe extends Component {
  constructor(){
    super();
    this.showDetail = this.showDetail.bind(this);
  }
  showDetail(){
    this.refs.detail.className = this.refs.detail.className ? '' : 'hidden';
    this.render();
  }
  render(){
    let ingredients = this.props.ingredients;
    let ingredientNodes = ingredients.split(',').map((ingredient, index) => {
      return (
        <Ingredient key={index}>
          {ingredient}
        </Ingredient>
      );
    });
    return (
      <div>
        <div className="bg-primary recipe-name" onClick={this.showDetail}>{this.props.name}</div>
        <div className="hidden" ref="detail">
          <h2 className="text-center">Ingredients</h2>
          <hr />
          {ingredientNodes}
        </div>
      </div>
    );
  }
}

export default Recipe;