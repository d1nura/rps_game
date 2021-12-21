import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Navbar } from "./components/Atoms/Navbar/Navbar";
import { GamePage } from "./components/Pages/GamePage/GamePage";
import { MainTemplate } from "./components/Templates/MainTemplate/MainTemplate";
import { store } from "./slicers/Store";

function App() {
  return (
    <Provider store={store}>
      <MainTemplate>
        <Navbar />
        <GamePage />
      </MainTemplate>
    </Provider>
  );
}

export default App;
