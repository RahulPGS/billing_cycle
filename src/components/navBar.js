import React from "react";
import "./navbar.css"
import Home from "./home";
import UserDetails from "./userDetails";
import AddUser from "./addUser";

class Navbar extends React.Component {
    render() {
        return <div style={{ backgroundColor: "blue", color: "white", padding: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>BILLING CYCLE</h3>
                <div>
                    <p style={{ color: "yellow" }}>Welcome ADMIN</p>
                    <a href="#" style={{ textDecoration: "underline", cursor: "pointer", color: "yellow" }}>Change password</a> <span style={{ cursor: "pointer" }}>LOGOUT</span>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }} className="button-row">
                <button onClick={() => this.props.handleBodyChange(<Home />)}>Home</button>
                <button onClick={() => this.props.handleBodyChange(<UserDetails />)}>USER DETAILS</button>
                <button onClick={() => this.props.handleBodyChange(<AddUser />)}>ADD USER</button>
                <button>CHANGE ROLE</button>
                <button>DELETE USER</button>
                <button>REPORT</button>
            </div>
        </div>
    }
}

export default Navbar;