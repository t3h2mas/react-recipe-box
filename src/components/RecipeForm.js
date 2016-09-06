import React, { Component } from 'react';

class RecipeForm extends Component {
  constructor(){
    super();
    this.clickSave = this.clickSave.bind(this);
    this.clickCancel = this.clickCancel.bind(this);
    
  }
  clickSave(){
    this.props.addRecipe(this.refs.name.value, this.refs.ingredients.value);
    // clear the form
    this.refs.name.value = '';
    this.refs.ingredients.value = '';
    this.props.toggleForm();
  }
  clickCancel(){
    this.refs.name.value = '';
    this.refs.ingredients.value = '';
    this.props.toggleForm();
  }
  render(){
    return (
      <div className={'recipe-form' + (this.props.show ? '': ' hidden')}>
        <input type="text" placeholder="recipe name" className="form-control" ref="name"/>
        <input type="text" placeholder="ingredients (separated by comma)" className="form-control" ref="ingredients"/>
        <button type="button" className="btn btn-success" onClick={this.clickSave}>Save</button>
        <button type="button" className="btn btn-danger" onClick={this.clickCancel}>Cancel</button>
      </div>
    );
  }
};

RecipeForm.propTypes = {
  toggleForm: React.PropTypes.func.isRequired,
  addRecipe: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool.isRequired
};

export default RecipeForm;
