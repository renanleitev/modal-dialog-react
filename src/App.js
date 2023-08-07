import React from "react";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Test from "./pages/Test";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Test/>
      <Login/>
      <Admin/>
    </div>
  );
}

export default App;
