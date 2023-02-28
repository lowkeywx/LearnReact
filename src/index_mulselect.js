import React from "react";
import ReactDoM from "react-dom/client"

class NamedForm extends React.Component {
    constructor(pro) {
        super(pro);
        this.state = {
            value: []
        }
        this.submit = this.handleSubmit.bind(this);
        this.changed = this.handleChanged.bind(this);
    }
    handleSubmit(e) {
        alert("name=" + this.state.value);
        this.setState({value: []})
        e.preventDefault();
    }
    handleChanged(e) {
        let arr = this.state.value.slice();
        let index = arr.findIndex((v)=>v === e.target.value);
        if(index !== -1){
            arr.splice(index,1);
        }else {
            arr.push(e.target.value);
        }

        this.setState({value: arr});
    }
    // render() {
    //     return <form onSubmit={this.handleSubmit.bind(this)}>
    //         <label>
    //             姓名：
    //             <input type={"text"} value={this.state.value} onChange={this.handleChanged.bind(this)}></input>
    //         </label>
    //         <input type={"submit"} value={"wawa"}></input>
    //     </form>
    // }
    // render() {
    //     return <form onSubmit={this.submit}>
    //         <label>
    //             姓名：
    //             <input type={"text"} onChange={this.changed}></input>
    //         </label>
    //         <input type={"submit"}></input>
    //     </form>
    // }

    // render() {
    //     return <form onSubmit={(e)=>this.handleSubmit(e)}>
    //         <label>
    //             姓名：
    //             <input type={"text"} onChange={(e) =>this.handleChanged(e)}></input>
    //         </label>
    //         <input type={"submit"}></input>
    //     </form>
    // }

    // render() {
    //     return <form onSubmit={(e)=>this.handleSubmit(e)}>
    //         <label>
    //             文章：
    //             <textarea type={"text"} onChange={(e) =>this.handleChanged(e)}></textarea>
    //         </label>
    //         <input type={"submit"}></input>
    //     </form>
    // }

    render() {
        return <form onSubmit={this.submit}>
        <label>
            选项：
            valu 里面的只是数字或者字符串都行
            <select multiple={true} value={this.state.value} onChange={this.changed}>
                <option value={1}>option 1</option> 
                <option value={2}>option 2</option>
                <option value={3}>option 3</option>
                <option value={4}>option 4</option>
            </select>
        </label>
        <input type={"submit"}></input>
        </form>
    }
}

let root = ReactDoM.createRoot(document.getElementById("root"));
root.render(
    <NamedForm></NamedForm>
);
