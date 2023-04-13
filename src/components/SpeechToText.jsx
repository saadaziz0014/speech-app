import React, { useState } from "react";
import regeneratorRuntime from "regenerator-runtime";
import "./SpeechToText.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

const SpeechToText = () => {
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [text, setText] = useState("");
  const [isCopied, setCopied] = useClipboard({ text });
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening = () => {
    SpeechRecognition.stopListening();
    setText(transcript);
  };
  if (!browserSupportsSpeechRecognition) {
    return window.alert("Not Support");
  }
  return (
    <>
      <h1 className="display-1 text-center"> Speech to Text</h1>
      <div className="container">
        <div className="content">{transcript}</div>
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={setCopied} className="btn btn-primary mx-3">
            {isCopied ? "Copied" : "Copy"}
          </button>
          <button className="btn btn-primary mx-3" onClick={startListening}>
            Start
          </button>
          <button className="btn btn-primary mx-3" onClick={stopListening}>
            Stop
          </button>
        </div>
      </div>
    </>
  );
};

export default SpeechToText;
