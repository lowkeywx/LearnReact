import React from 'react';
import ReactDOM from 'react-dom/client';


let user = {
    firstName:"wang",
    secondName:"xinghao"
}

function formatUserName(user) {
    return user.firstName + user.secondName + new Date().toLocaleTimeString();
}
function Element(props) {
    return <div>
        <h1>Hello, {formatUserName(props.name)}</h1>;
        <h1>now is: {new Date().toLocaleTimeString()}</h1>
        <div>{}</div>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Element name={{firstName:"aa",secondName:"1"}}></Element>,
        <Element name={user}></Element>,
        <Element name={{firstName:"bbb", secondName:"2"}}></Element>
    </div>

);

