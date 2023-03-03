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
        <ul>
            <li>Unordered item1</li>
            <li>Unordered item2</li>
            <li>Unordered item3
                <ol>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ol>
            </li>
        </ul>

    </body>
);
