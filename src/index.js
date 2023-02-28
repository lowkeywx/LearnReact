import React from "react"
import ReactDOM from "react-dom/client"

class MultInput extends React.Component {
    constructor(pro) {
        super(pro);
        this.state =  {
            isGoning: false,
            numOfGuest:0
        }
    }

    handleChanged(e) {
        const target = e.target;
        const name = e.target.name;
        const value = name === "isGoning" ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        return <div>
            <label>
                isGoning:
                <input type="checkbox" name="isGoning" checked={this.state.isGoning} onChange={(e)=>this.handleChanged(e)}></input>
            </label>
            <hr></hr>
            <label>
                numOfGuest:
                <input type={"number"} name="numOfGuest" value={this.state.numOfGuest} onChange={(e)=>this.handleChanged(e)}></input>
            </label>
        </div>
    }
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <MultInput></MultInput>
);
