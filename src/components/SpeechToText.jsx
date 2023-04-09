import React from "react";
import "./SpeechToText.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const SpeechToText = () => {
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <h1 className="display-1 text-center"> Speech to Text</h1>
      <div className="container">
        <div className="content">{transcript}</div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary mx-3">Copy</button>
          <button className="btn btn-primary mx-3" onClick={startListening}>
            Start
          </button>
          <button
            className="btn btn-primary mx-3"
            onClick={SpeechRecognition.stopListening}
          >
            Stop
          </button>
        </div>
      </div>
    </>
  );
};

export default SpeechToText;
