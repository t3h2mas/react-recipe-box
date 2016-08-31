import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import recipeApp from './Reducer';
import { addRecipe, removeRecipe } from './Actions';

import './App.css';

const store = createStore(recipeApp);

const RecipeBox = (props) => {
  return (
  <div className="recipe-box">
    <Recipe name="Tasty Food"/>
    <Recipe name="Yucky eats" />
  </div>
  )
};

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
    let ingredients = this.props.ingredients || ['ingredient 1', 'ingredient 2'];
    let ingredientNodes = ingredients.map((ingredient, index) => {
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

const Ingredient = (props) => {
  return (
  <div className="ingredient">
    {props.children}
  </div>
  )
};

class RecipeForm extends Component {
  constructor(){
    super();
    this.clickSave = this.clickSave.bind(this);
  }
  clickSave(){
    console.log(this.refs.name.value + ' ' + this.refs.ingredients.value);
  }
  render(){
    return (
      <div className={'recipe-form' + (this.props.show ? '': ' hidden')}>
        <input type="text" placeholder="recipe name" className="form-control" ref="name"/>
        <input type="text" placeholder="ingredients (separated by comma)" className="form-control" ref="ingredients"/>
        <button type="button" className="btn btn-success" onClick={this.clickSave}>Save</button>
        <button type="button" className="btn btn-danger">Cancel</button>
      </div>
    );
  }
};

class AddRecipe extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.disable = this.disable.bind(this);
    this.enable = this.enable.bind(this);
  }
  disable(){
    this.refs.btn.className += ' hidden';
  }
  enable(){
    this.refs.btn.className="btn btn-primary";
  }
  handleClick(){
    this.disable()
    this.props.showForm();
  }
  render(){
    return <button type="button" ref="btn" className="btn btn-primary" onClick={this.handleClick}>New Recipe</button>;
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      form: {show: false},
    };
    this.showForm = this.showForm.bind(this);
    this.saveLocalData = this.saveLocalData.bind(this);
    this.loadLocalData = this.loadLocalData.bind(this);
  }
  componentWillMount(){
    this.loadLocalData();
  }
  saveLocalData() {
    localStorage.setItem('data', JSON.stringify(this.state));
  }
  loadLocalData() {
    if (!localStorage) {
      console.error('localStorage not supported :(');
      return;
    }

    let data = JSON.parse(localStorage.getItem('data'));
    console.log(data);
  }
  showForm() {
    this.setState({form: {show: true}});
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Recipes</h1>
        <RecipeBox />
        <RecipeForm show={this.state.form.show}/>
        <AddRecipe showForm={this.showForm}/>
      </div>
    );
  }
}

export default App;
