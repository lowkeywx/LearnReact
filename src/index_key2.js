import React from "react";
import ReactDOM from "react-dom/client";

const datas = [
    {id:1, title:"111", content:"the first data, id=1, titile=111"}, 
    {id:2, title:"222", content:"the second data, id=2,titile=222"},
    {id:3, title:"333", content:"the third data, id=3,titile=333"},
]

function TitileItem(po) {
    return <li>
        <h1>{po.v.title}</h1>
    </li>
}

function Content(po) {
    return <div>
        <h2>{po.v.title}</h2>
        <p>{po.v.content}</p>
    </div>
}

function Wahaha(po) {
    return <div>
        <ul>
            {po.datas.map((d)=> <TitileItem key={d.id} v={d}></TitileItem>)}
        </ul>
        <hr></hr>
        {po.datas.map((d)=> <Content v={d}></Content>)}
    </div>
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Wahaha datas={datas}></Wahaha>
);