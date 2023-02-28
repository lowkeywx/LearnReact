import React from "react"
import ReactDOM from "react-dom/client"

const tempName = {
    C: "C",
    F: "F"
}

class TempInput extends React.Component {
    constructor(p) {
        super(p);
        this.state = {

        }
    }
    render() {
        return <fieldset>
            <legend>this is {this.props.typeName}</legend>
            <input value={this.props.v} onChange={function(e){
                e.target.typeName = this.props.typeName;
                this.props.onChange(e);
            }.bind(this)}></input>
        </fieldset>
    }
}

class TempSet extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            t: ""
        }
    }

    convertCtoF(v) {
        return (v * 9 / 5) + 32;
    }

    conveertFtoC(v) {
        return (v - 32) * 5 / 9;
    }

    handleChange(e) {
        let v = e.target.typeName === "F" ? this.conveertFtoC(e.target.value) : e.target.value;
        this.setState({t: v});
    }

    render() {
        return <div>
            <label>"可以绑定不同的回调函数，来进行处理，就不用在e中添加变量了."</label>
            <TempInput typeName={"F"} v={this.convertCtoF(this.state.t)} onChange={this.handleChange.bind(this)}></TempInput>
            <TempInput typeName={"C"} v={this.state.t} onChange={this.handleChange.bind(this)}></TempInput>
        </div>
    }
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <TempSet></TempSet>
);

