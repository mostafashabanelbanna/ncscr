import "./App.css";
import * as React from "react";
import Navigation from "./layout/Navigation";
import Router from "./router/Router";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

import "./styles/activity-agenda.css";
import "./styles/globals.css";
import "./styles/Home.module.css";
import "./styles/latestVersions.css";
import "./styles/list-with-image.css";
import "./styles/news.css";
import "./styles/pagination.css";
import "./styles/search-section.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main>
        <Router />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
