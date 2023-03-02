import React from "react"
import ReactDOM from "react-dom/client"

// 调用子元素回调 numTimes 次，来重复生成组件
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }
  
  function ListOfTenThings() {
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    );
  }
  

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ListOfTenThings></ListOfTenThings>
);

