import React, { Component } from 'react';
import Ingredient from './Ingredient';

class Recipe extends Component {
  constructor(){
    super();
    this.showDetail = this.showDetail.bind(this);
    this.remove = this.remove.bind(this);
  }
  showDetail(){
    this.refs.detail.className = this.refs.detail.className ? '' : 'hidden';
    this.render();
  }
  remove(){
    let id = this.props.id;
    console.log('removing ' + id + ' : type ' + typeof id);
    console.dir(this.props.removeRecipe);
    this.props.removeRecipe(id);
  }
  render(){
    let ingredientNodes = this.props.ingredients.split(',').map((ingredient, index) => {
      return (
        <Ingredient key={index}>
          {ingredient}
        </Ingredient>
      );
    });
    return (
      <div>
        <div className="bg-primary recipe-name" onClick={this.showDetail}>
          <span>{this.props.name}</span>
          <span className="fr" onClick={this.remove}>x</span>
        </div>
        <div className="hidden" ref="detail">
          <h2 className="text-center">Ingredients</h2>
          <hr />
          {ingredientNodes}
        </div>
      </div>
    );
  }
}

Recipe.propTypes = {
  name: React.PropTypes.string.isRequired,
  ingredients: React.PropTypes.string.isRequired,
  removeRecipe: React.PropTypes.func.isRequired
};

export default Recipe;