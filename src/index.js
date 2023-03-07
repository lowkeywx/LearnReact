import React from "react"
import ReactDOM from "react-dom/client"
import _ from "./style.css"
//内联样式优先级最高
let liStyle = {
    'background-color': "red"
}
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="wrapper">
        <div className="box a">
            <p>aaaa</p>
        </div>
        <div className="box b">
            <p>bbb</p>
        </div>
    </div>

);
