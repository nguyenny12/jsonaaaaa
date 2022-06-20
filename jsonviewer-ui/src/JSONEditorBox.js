import React, { Component } from "react";

import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.css";

import "./JSONEditorBox.css";

export default class JSONEditorBox extends Component {
  componentDidMount() {
    const options = {
      mode: "form",
      modes: ["code", "text", "form", "tree", "view"],
      onChangeJSON: this.props.onChangeJSON,
    };

    this.jsoneditor = new JSONEditor(this.container, options);
    this.jsoneditor.set(this.props.json);
  }

  componentWillUnmount() {
    if (this.jsoneditor) {
      this.jsoneditor.destroy();
    }
  }

  componentDidUpdate() {
    this.jsoneditor.update(this.props.json);
  }

  render() {
    return (
      <div
        className="jsoneditor-react-container"
        ref={(elem) => (this.container = elem)}
      />
    );
  }
}
