import React, { Component } from "react";
import "./App.css";
import LoadingSpinner from "./loadingSpinner/loadingSpinner";
import Error from "./errorMessage/errorMessage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      upperLimit: "",
      results: null,
      error: null,
      isLoading: false
    };
  }

  fetchMedianPrimes = () => {
    this.setState({ isLoading: true });
    fetch("http://localhost:3005/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        upperLimit: this.state.upperLimit
      })
    })
      .then(res => res.json())
      .then(json => this.setState({ results: json, isLoading: false }))
      .catch(e => console.error("Error requesting, please ensure data entered is correct"));
  };

  handleSubmit = event => {

    const intValue = parseInt(this.state.upperLimit);

    if (this.state.upperLimit.length === 0){
      this.setState({error: "Ensure that you entered a value."})
    }

    else if (intValue < 0){
      this.setState({error: "Ensure that you entered a positive integer."})
    }

    else if (isNaN(intValue)) {
      this.setState({error: "Ensure that you entered a valid integer."})
    } else {
      this.fetchMedianPrimes();
    }

    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ upperLimit: event.target.value });
  };

  render() {

    let renderedResults;
    let startText = "";
    if (this.state.isLoading){
      renderedResults = <LoadingSpinner/>;
    } else if (this.state.error != null) {
      renderedResults = <Error message={this.state.error}/>
    } else if (this.state.results == null) {
      renderedResults = ""
    } else {
      renderedResults = this.state.results[0];
      startText = "The median prime number is: ";

      if (this.state.results.length === 2) {
        renderedResults = renderedResults + ", " + this.state.results[1];
        startText = "The median prime numbers are: ";
      }
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1> Median Prime Number Calculator </h1>
          <h5>
            Submit a number below to receive the median number(s) of the set of
            the prime numbers of your number
          </h5>

          <form onSubmit={this.handleSubmit}>
            <label>
              Enter the upper bound number: <br/>
              <input type="text" value={this.state.upperLimit} onChange={this.handleChange} className="input"/>
            </label>

            <br/>

            <input type="submit" value="Submit" className="submitBtn"/>
          </form>
          <br/>

          {startText}{renderedResults}

        </header>
      </div>
    );
  }
}

export default App;
