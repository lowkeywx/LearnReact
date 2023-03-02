import React from "react"
import ReactDOM from "react-dom/client"


class Child extends React.Component {
    render() {
        return <button>Click</button>
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
        return <div onClick={this.onClick.bind(this)}>
            <Child></Child>
        </div>
    }
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Parent></Parent>
);