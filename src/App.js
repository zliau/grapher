import React from "react";
import Tabs from "./tabs";
import OrderList from "./containers/visibleOrderList";
import "typeface-roboto";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header>
                <Tabs
                    title="Table"
                />
            </header>

            <OrderList />
        </div>
    );
}

export default App;