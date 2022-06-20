import React, { useState } from "react";
import io from "socket.io-client";
import JSONEditorBox from "./JSONEditorBox";
import "./JsonViewerPanel.css";

function JsonViewerPanel() {
  const [json, setJson] = useState({});

  const socket = io();

  socket.on("update_editor", function (msg) {
    json = msg;
    // JSONEditor.updateText(msg);
  });

  socket.emit("join_channel", "momiapp");

  return (
    <div className="contents">
      <JSONEditorBox json={json} onChangeJSON={setJson} />
    </div>
  );
}

export default JsonViewerPanel;
