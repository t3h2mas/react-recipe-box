import React, { Component } from 'react';

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

export default RecipeForm;
