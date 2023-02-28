import React from "react"
import ReactDOM from "react-dom/client"

let Context1 = React.createContext("111");
let Context2 = React.createContext("222");

function ContextConsumer() {
    return <Context1.Consumer>
        {(v)=> <>
                <p>{v}</p>
                <Context2.Consumer>
                    {(v)=><p>{v}</p>}
                </Context2.Consumer>
            </>
         }
    </Context1.Consumer>
}

class App extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            c1:"111",
            c2:"222"
        }
    }

    handleChange1(e) {
        this.setState({c1: "11111"});
    }

    handleChange2(e) {
        this.setState({c2: "22222"});
    }

    render() {
        return <Context1.Provider value={this.state.c1}>
            <Context2.Provider value={this.state.c2}>
                <ContextConsumer></ContextConsumer>
                <button onClick={this.handleChange1.bind(this)}>c1</button>
                <button onClick={this.handleChange2.bind(this)}>c2</button>
            </Context2.Provider>
        </Context1.Provider>
    }
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App></App>
);
