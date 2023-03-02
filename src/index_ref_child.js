import React from "react"
import ReactDOM from "react-dom/client"

class ChildRef extends React.Component {
    wahah() {
        console.log("aaa");
    }
    render() {
        return <input ref={this.props.r}></input>
    }
}

class TestRef extends React.Component {
    constructor(p) {
        super(p);
        this.refff = React.createRef();
    }

    render() {
       return <ChildRef ref={this.props.r}></ChildRef>
    }
}

class Whaha extends React.Component {
    constructor(p) {
        super(p);
        this.refff = React.createRef();
        this.state = {
            v:1
        };
        this.timerId = 0;
    }
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState((e)=>({v: e.v + 1}));
        }, 5000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    shouldComponentUpdate(p,s) {
        this.refff.wahah();
    }
    render() {
        return <div>
            <TestRef r={this.refff}></TestRef>
            <p>{this.state.v}</p>
            <p>{"ref 不能通过props传递到子类，需要使用forwardRef"}</p>
        </div>
    }
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Whaha></Whaha>
);