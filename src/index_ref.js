import React from "react"
import ReactDOM from "react-dom/client"

class NameForm extends React.Component {
    constructor(p) {
        super(p);
        this.input = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        alert(this.input.current.defaultValue);
    }

    render() {
        return <input defaultValue={"wahaha"} ref={this.input} onChange={this.handleChange}></input>
    }
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <NameForm></NameForm>
);

