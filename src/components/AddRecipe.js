import React, { Component } from 'react';

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

export default AddRecipe;
