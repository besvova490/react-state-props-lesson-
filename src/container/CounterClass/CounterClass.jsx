import { Component } from "react";

// components
import ErrorBoundary from "./ErrorBoundary";


class CounterClass extends Component {
  state = {
    number: 5,
    inputValue: "123",
  };

  componentDidMount() {
    console.log("component on page");
  }

  componentDidUpdate(_, prevState) {
    console.log("prevState", prevState, "componentDidUpdate");
  }

  componentWillUnmount() {
    alert("Ooooopps!!!");
  };

  handleClick() {
    this.setState({ number: this.state.number + 1 });
  };

  setDefaultInputValue() {
    this.setState({ inputValue: "Hello World" });
  }



  render() {
    const { number, inputValue } = this.state;

    return (
      <ErrorBoundary>
        <div className="lsn-counter">
          <p>{ number }</p>
          <button onClick={() => this.handsleClick()}>Count</button>

          <div>
            <input
              type="text"
              value={inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })}
            />
            <button onClick={() => this.setDefaultInputValue()}>Set default</button>
          </div>

          <code>{inputValue}</code>
        </div>
      </ErrorBoundary>
    );
  }
}


export default CounterClass;
