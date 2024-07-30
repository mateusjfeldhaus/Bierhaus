import React from "react";
import { GlobalStyles } from "./styles/global";
import { Router } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StyledWrapper } from "./styles/Wrapper";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <div className="App"></div> */}
      <StyledWrapper>
        <Header />
        <Router />
        <Footer />
      </StyledWrapper>
    </>
  );
}

export default App;
