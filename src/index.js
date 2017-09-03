import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

class App extends React.Component {
    render() {
        return (
            <div>
            Test
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));