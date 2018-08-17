import React, { Component } from "react";
import Tabs from "./tabs";
import Data from "./data";
import "typeface-roboto";
import "./App.css";

class App extends Component {
    render() {
        return (
          <div className="App">
              <header>
              <Tabs
                      title="Stock Table"
                    />
                </header>

              <Data />
            </div>
        );
    }
}

export default App;