import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SpeechToText from "./components/SpeechToText";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/stot" element={<SpeechToText />} />
      </Routes>
    </>
  );
};

export default App;
