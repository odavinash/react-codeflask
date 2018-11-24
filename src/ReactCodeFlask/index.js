import React from "react";
import CodeFlask from "codeflask";
import styled from "styled-components";
import debounce from "just-debounce-it";
import nanoid from "nanoid";

import sampleCode from "./sampleCode";

const Container = styled.div`
  .codeflask {
    background: #f4f7fb;
    border: 1px solid #e6eef8;
    max-height: 300px;
    max-width: 90vw;
  }
`;

const createCodeEditor = ({ id, code, onChange }) => {
  const editor = new CodeFlask(`#${id}`, {
    language: "js",
    lineNumbers: false
  });

  editor.updateCode(__DEV__ ? sampleCode : code);

  editor.onUpdate(code => {
    onChange(code);
  });

  editor.editorRoot.addEventListener("focusin", event => {
    editor.onUpdate(onChange);
  });

  editor.editorRoot.addEventListener("focusout", event => {
    editor.onUpdate(() => {});
  });
};

export default class ReactCodeFlask extends React.PureComponent {
  id = `rcf-${nanoid()}`;

  componentDidMount() {
    console.log(this.id);
    createCodeEditor({
      id: this.id,
      code: this.props.code,
      onChange: this.props.onChange
    });
  }

  render() {
    return (
      <Container id={this.id}>
        {/* CHECK IT OUTTTTT. */}
        {/* FUNK SOUL BROTHA. */}
      </Container>
    );
  }
}
