import React from "react";
import "./App.scss";
import AppNavigator from "./routes/AppNavigator";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppNavigator />
    </BrowserRouter>
  );
}

export default App;
