import React from 'react'
import ReactDom from 'react-dom/client'

function NumList(props) {
    let numberList = props.NumList;
    const liList = numberList.map((number)=>
        <li key={number.toString()}>{number}</li>
    );
    return <ul>
        {liList}
    </ul>
}

function NumItem(pro) {
    return <li>{pro.text}</li>
}

function NumItemList(pro) {
    return <ul>
    {pro.numbers.map(
    (value) => <NumItem key={value.id} text={value.text}></NumItem>
    )}</ul>
}

let root = ReactDom.createRoot(document.getElementById("root"));
let nums = [1,2,3,4,5];

let Items = [{id:1,text:"111"},{id:2,text:"222"},{id:3,text:"333"}];

root.render(
    <div>
        <NumList NumList={nums}></NumList>
        <NumItemList numbers={Items}></NumItemList>
    </div>

);
