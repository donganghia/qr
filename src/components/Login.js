import React, { Component } from "react";
import   { auth, database }  from "../api/Firebase";
import { AsyncStorage } from "AsyncStorage";

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }  

    handleChange = (e) => {
       this.setState({
            [e.target.id] : e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const { email, password } = this.state;
        auth.signInWithEmailAndPassword(email, password)
        .then(() => { 
            //   database.ref('role').on('value', (e) => {
            //     var rows = []; 
            //     var role = []; 
            //     if ( e && e.val() && e.val().map ) {
            //         e.val().map((v) => rows.push ( v ));
            //         role = rows.filter(v => v.email ==  email);
            //         this.props.role(role.length > 0 ? role[0].level : -1);
            //         this.props.loading(true);
            //         this.setValue(role[0].level);
            //     } 
            //   });  
            alert("ok");
        })
        .catch((e) => { 
          alert(e);
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input  
                        type="email" 
                        id="email"
                        onChange={this.handleChange}
                        className="form-control" 
                        placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        id="password"
                        onChange={this.handleChange}
                        className="form-control" 
                        placeholder="Enter password" />
                </div>
                <button className="btn btn-primary btn-block">Submit</button>
            </form>
        );
    }
}