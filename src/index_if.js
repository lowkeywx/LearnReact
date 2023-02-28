import React from 'react'
import ReactDom from 'react-dom/client'


function UserGreating(props) {
    return <h1>hello! {props.name}</h1>
}

function GuessGreating(props) {
    return <h1>please! login</h1>
}

function Greating(props) {
    if(props.isLogin) {
        return <UserGreating name={"lowkey"}></UserGreating>
    } else {
        return <GuessGreating></GuessGreating>
    }
}

function LoginBtn(props) {
    return <button onClick={props.onClick}>
        login
    </button>
}

function LogoutBtn(props) {
    return <button onClick={props.onClick}>
        Logout
    </button>
}

class LogControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    handleLogin() {
        this.setState({isLogin: false});
    }

    handleLogout() {
        this.setState({isLogin: true});
    }

    render() {
        let btn;
        if(this.state.isLogin) {
            btn = <LogoutBtn onClick={() => this.handleLogin()}></LogoutBtn>
        } else {
            btn = <LoginBtn onClick={() => this.handleLogout()}></LoginBtn>
        }
        return <div>
            {!this.state.isLogin && btn},
            {this.state.isLogin ? <LogoutBtn onClick={() => this.handleLogin()}></LogoutBtn> 
            : <LoginBtn onClick={() => this.handleLogout()}></LoginBtn>},
            <Greating isLogin={this.state.isLogin}></Greating>
        </div>
    }
}

let root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <div>
        <LogControl></LogControl>,
    </div>
);

