// Can't use import React from "react",
// because it is not exported as default.
import * as React from "react";
import * as ReactDOM from "react-dom";

import { InterfaceOne, InterfaceTwo } from './interfaces';

class App extends React.Component<any, any> implements InterfaceOne, InterfaceTwo {
    author: string = "Zico Deng";
    description: string = "This repo demonstrates how to set up a React app with TypeScript and Webpack.";

    constructor(props) {
        super(props);

        this.state = {
            date: "9/2/2017",
        }
    }

    render() {
        return (
            <div>
                <h1>React App</h1>
                <p>{ `Created by ${ this.author }` }</p>
                <p>{ `Created on ${ this.state.date }` }</p>
                <p>{ `Description: ${ this.description }` }</p>
                <p>{ `Text: ${ this.state.text === undefined ? "no text yet" : this.state.text }` }</p>
                <button onClick={ (e) => { this.handleClickBtn(e) } }>Print Text</button>
            </div>
        )
    }

    handleClickBtn(e) {
        e.preventDefault();
        
        this.printText();
    }

    printText() {
        console.log("Print text");
        this.setState({
            text: "Hello, World"
        });
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"))