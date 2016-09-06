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
    //this.disable()
    this.props.toggleForm();
  }
  render(){
    return <button type="button" ref="btn" className="btn btn-primary" onClick={this.handleClick}>New Recipe</button>;
  }
}

AddRecipe.propTypes = {
  toggleForm: React.PropTypes.func.isRequired
}

export default AddRecipe;
