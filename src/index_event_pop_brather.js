import React from "react"
import ReactDOM from "react-dom/client"


class Child extends React.Component {
    render() {
        return <button>Click</button>
    }
}

class Brather extends React.Component {
    onClick() {
        console.log('aaaaa');
    }
    render() {
        return <p onClick={this.onClick.bind(this)}>hello</p>
    }
}

class Parent extends React.Component   {
    constructor(p) {
        super(p);
        this.state = {

        }
    }

    onClick() {
        console.log("aaaa");
    }

    render() {
        return <div>
            <Child></Child>
            <Brather onClick={this.onClick.bind(this)}></Brather>
        </div>
    }
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Parent></Parent>
);