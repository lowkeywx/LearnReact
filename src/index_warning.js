import React from 'react'
import ReactDom from 'react-dom/client'

function Warnging2(props) {
    return props.warning ? <label>{props.warning}</label> : null;
}

class Warning extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            warning: props.warning
        }
    }
    handleClick() {
        this.setState({
            warning: this.state.warning ? null : "heiheihei"
        });
    }
    render() {
        return <div>
            <button onClick={()=>this.handleClick()}>
                display
            </button>
            <Warnging2 warning={this.state.warning}></Warnging2>
        </div>
    }
}

let root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <Warning warning={"aaa"}></Warning>
);