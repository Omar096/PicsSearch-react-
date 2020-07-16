import React from "react";
import ReactDOM from "react-dom";
class SearchBar extends React.Component {
  /*onInputChange(event){
    console.log(event.target.value)
  }*/
  state = { term: "" };
  //on change is prop calling a call back func when anythig change in input
  //on click  is prop calling a call back func when clicking on
  //on submit is prop calling a call back func when submitting a form
  onFormSubmit=(e)=>{
    e.preventDefault()
    this.props.OnSubmit(this.state.term)
  }
  render() {
    return (
      <div className="ui form segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>User Input</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
