import React from "react"
import ReactDOM from "react-dom/client"


class Father extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            v:p.v
        }
    }

    handleChange(e) {
        this.props.onChange(e);
    }

    render() {
        return <div>
            <input value={this.props.v} onChange={this.handleChange.bind(this)}></input>
        </div>
    }
}
//constructor开始的时候调用一次，更改state，只调用render，props如何更新的呢？
class RenderTest extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            v:p.v
        }
    }
    handleChange(e) {
        this.setState({v:e.target.value});
    }
    render() {
        return <div>
            <Father v={this.props.v} onChange={this.handleChange.bind(this)}></Father>
        </div>
    }
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RenderTest></RenderTest>
);

