import React from "react"
import ReactDOM from "react-dom/client"

class ErrorBoder extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {hasError: true}
    }
    componentDidCatch(error,errorInfo) {
        alert(error + errorInfo);
    }

    render() {
        return this.props.children;
    }
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorBoder>
        <h1><p>{this.p}</p></h1>
    </ErrorBoder>
);
