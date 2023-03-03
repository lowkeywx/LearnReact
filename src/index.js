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
        <div class="box">I use the standard box model.</div>
        <div class="box1 alternate">I use the alternate box model.</div>


    </body>
);
