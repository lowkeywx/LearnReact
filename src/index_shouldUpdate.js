import React from "react"
import ReactDOM from "react-dom/client"

class TestRender extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            v:1,
            a:2,
            b:3
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);
        if (this.state.a !== nextState.a) {
          return true;
        }
        return false;
      }

      handleChange() {
        let newV = this.state.v;
        newV++;
        this.setState({v:newV});
      }

    render() {

        return <div>
            <button onClick={()=>this.handleChange.bind(this)}>{this.state.v}</button>
            <button onClick={()=>{
                let newV = this.state.a;
                newV++;
                this.setState({a:newV});
            }}>{this.state.a}</button>
        </div>
    }
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TestRender></TestRender>
);