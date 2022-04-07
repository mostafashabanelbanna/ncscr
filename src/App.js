import "./App.css";
import * as React from "react";
// import Navigation from "./layout/Navigation";
import Router from "./router/Router";
import Main from "./layout/Main";
// import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
        <Main>
          <Router />
        </Main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
