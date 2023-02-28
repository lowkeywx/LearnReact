import React from "react"
import ReactDOM from "react-dom/client"

function ControlInput(pro) {
    return <input value={pro.value}></input>
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ControlInput value={"wahaha"}></ControlInput>
);

setTimeout(function() {
    root.render(
        <ControlInput value={null}></ControlInput>
    );
}, 10000);
