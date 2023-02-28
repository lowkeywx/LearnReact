import React from "react"
import ReactDOM from "react-dom/client"

function TestProps({item}) {
    return <>
        <h1>{item.id}</h1>
        <p>{item.content}</p>
        <hr/>
        <h1>这种方式无法使用this.props.item</h1>
    </>
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <TestProps item={{id:1,content:"1234567890"}}></TestProps>
    </div>
);

