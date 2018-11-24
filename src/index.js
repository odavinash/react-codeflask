import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import debounce from "just-debounce-it";
import nanoid from "nanoid";

import compile from "./babes";
import ReactCodeFlask from "./ReactCodeFlask";
import "./styles.css";

global.__DEV__ = process.env.NODE_ENV === "development";

class App extends React.Component {
  state = { code: "" };

  onChange = code => {
    this.setState({ code });
  };

  render() {
    return (
      <div className="App">
        <Evaluator code={this.state.code} />
        <ReactCodeFlask code={this.state.code} onChange={this.onChange} />
      </div>
    );
  }
}

const Container = styled.div`
  background: #f4f7fb;
  border: 1px solid #e6eef8;
  height: 200px;
  width: 90vw;
  max-height: 300px;
  max-width: 90vw;
  margin-bottom: 24px;
`;

class Evaluator extends React.PureComponent {
  async componentWillReceiveProps(newProps) {
    if (this.props.code !== newProps.code) {
      //       console.log("EVALLING IT", newProps.code);
      const compiled = await compile(newProps.code);
      console.log("DONEEE>>>>", { compiled });
      //       eval(compiled);
    }
  }

  render() {
    return (
      <Container id="Evaluator">
        <div id="EvalRoot" />
        {/* CHECK IT OUTTTTT. */}
        {/* FUNK SOUL BROTHA. */}
      </Container>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
