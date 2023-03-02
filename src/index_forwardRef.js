import React from "react"
import ReactDOM from "react-dom/client"

const RefButton = React.forwardRef((props, ref)=>{
    return <button ref={ref} className="1111">{props.children}</button>
});

const ref = React.createRef();
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RefButton ref={ref}>hello</RefButton>
);

setTimeout(() => {
    alert(ref.current.className);
}, 1000);