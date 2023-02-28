import React from "react"
import ReactDOM from "react-dom/client"

const ContextValue = React.createContext({
    v:"111",
    change:()=>{}
});

class ContextTest extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            v: "111",
            change: this.handleChange.bind(this)
        }
    }

    handleChange() {
        this.setState({
            v:"222",
            change: this.handleChange.bind(this)
        });
    }

    render() {        
        return <ContextValue.Provider value={this.state}>
        <div>
            <h1>如果不使用.Provider无法正常显示</h1>
            <h1>如果不设置value的值，context没有输出</h1>
            <ContextLevel1></ContextLevel1>
            <button onClick={()=>this.setState({v:"2222"})}>change</button>
        </div>
        </ContextValue.Provider>
    }
}

class ContextLevel1 extends React.Component {
    constructor(p) {
        super(p);
        this.state = {

        }
    }
    render() {
        return <ContextLevel2></ContextLevel2>
    }
}

class ContextLevel2 extends React.Component {
    constructor(p) {
        super(p);
        this.state = {

        }
    }
    static contextType = ContextValue;
    render() {
        return <div>
            <h1>如果不设置contextType无法正常找到contex</h1>
            <h1>{this.context.v}</h1>
            <button onClick={this.context.change}>level2 change</button>
        </div>
    }
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextTest></ContextTest>
);

