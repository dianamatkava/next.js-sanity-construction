import React from "react";
import { Header } from "./components/header/Header"
import {DefaultHeaderV1Props} from "./defaults/header/v1"



function App() {
  return (
      <Header {...DefaultHeaderV1Props} />
  )
}

export default App;