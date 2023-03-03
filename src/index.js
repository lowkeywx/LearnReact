import React from "react"
import ReactDOM from "react-dom/client"
import _ from "./style.css"
//内联样式优先级最高
let liStyle = {
    'background-color': "red"
}
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <body>
        <p>
            I am a paragraph and this is a <span>span</span> inside that paragraph. A span is an inline element and so does not respect width and height.
        </p>
    </body>
);
