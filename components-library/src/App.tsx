import React from "react";
import Header from "./components/header/Header"
import {DefaultHeaderProps} from "./defaults/header/v1"



function App() {
  return (
      <Header {...DefaultHeaderProps} />
  )
}

export default App;