import React from 'react';
import ReactDOM from 'react-dom/client';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: new Date()
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({data: new Date()});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return <div>
            <h1>{this.state.data.toLocaleTimeString()}</h1>
        </div>
    }
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Clock></Clock>
    </div>
);