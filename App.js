import React from "react";
import Header from "./components/Header";
import Catalogue from "./components/Catalogue";

export default class App extends React.Component{
  render() {
    return(
      <>
        <Header/>
        <Catalogue/>
      </>
    )
  }
}

