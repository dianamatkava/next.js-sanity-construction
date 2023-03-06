import React from "react";
import Header from "./components/header/Header"
import HeaderInterface from "./interfaces/HeaderInterfaces"

const DefaultHeaderProps: HeaderInterface = {
  bgColor: 'sky-800',
  borderColor: 'transparent',
  round: 'none',
  marginX: '0',
  marginY: '0',
  width: null,
  height: null,
  items: null
}

function App() {
  return (
      <Header {...DefaultHeaderProps} />
  )
}

export default App;