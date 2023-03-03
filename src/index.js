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
    <p class="backendColor textColor content" >这是标题前的第一个P元素</p>
    <h1>我是一级标题</h1>
    <p class="special">这是一个段落文本。在文本中有一个 <span class="special">span element</span>
并且还有一个 <a href="http://example.com">链接</a>.</p>

    <p>这是第二段。包含了一个 <em>强调</em> 元素。</p>

    <ul>
        <li>项目 1</li>
        <li class="special">项目 2</li>
        <li style={liStyle}>项目 <em>三</em></li>
    </ul>

</body>
  );
