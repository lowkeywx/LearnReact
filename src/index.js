import React from "react"
import ReactDOM from "react-dom/client"

const ContextValue = React.createContext("123");

class ContextTest extends React.Component {
    constructor(p) {
        super(p);
        this.state = {

        }
    }

    render() {        
        return <ContextValue.Provider value="22222">
        <div>
            <h1>如果不使用.Provider无法正常显示</h1>
            <h1>如果不设置value的值，context没有输出</h1>
            <ContextLevel1></ContextLevel1>
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
            <h1>{this.context}</h1>
        </div>
    }
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextTest></ContextTest>
);

