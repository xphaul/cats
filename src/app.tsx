import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalContext from "@Contexts/Context";
import SetScroll from "@Hooks/SetScroll";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <SetScroll />
        <Routes />
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
