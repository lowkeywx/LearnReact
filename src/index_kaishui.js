import React from "react"
import ReactDOM from "react-dom/client"

function Warning(p) {
    if(p.t >= 100) {
        return <p>kai le</p>
    }
    return <p>mei kai</p>
}

class Caculat extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            t:""
        }
    }

    render() {
        return <fieldset>
            <legend>biao ti</legend>
            <input value={this.state.t} onChange={(e)=>this.setState({t:e.target.value})}></input>
            <Warning t={parseFloat(this.state.t)}></Warning>
        </fieldset>
    }
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
    <Caculat></Caculat>
    </div>
);
