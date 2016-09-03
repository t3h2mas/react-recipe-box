import React, { Component } from 'react';

import RecipeBox from './RecipeBox';
import RecipeForm from './RecipeForm';
import AddRecipe from './AddRecipe';

import '../App.css';

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
        <RecipeBox recipes={this.props.recipes}/>
        <RecipeForm />
        <AddRecipe />
      </div>
    );
  }
}

export default App;
