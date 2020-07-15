import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import   { auth, database }  from "../../api/Firebase";

export default class CreateGiftCode extends Component {
    state = {
        redirect: false,
        key: null,
        amount: 20, 
        active: 1 ,
        date: null     
    }  

    handleChange = (e) => {
       this.setState({
            [e.target.id] : e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let key = Math.random().toString(36).substring(5);
        this.setState({
            key : key
        })
        console.log(key);

        database.ref('giftcode/'+ key).set({
            amount: this.state.amount, 
            created_date: date,
            active: this.state.active
        })
        .then(result => {
            console.log("success");
            //redirect url
            this.setState({
                redirect : true
           })
        })
        .catch(error => {
            console.log(error.message);
        });  
    }
    render() {
        let redirectToReferrer = this.state.redirect;
        let key = this.state.key;

        if (redirectToReferrer === true) {
            return <Redirect to={{pathname: "/231094", state: { key: key } }} />
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <h3>Create Giftcode</h3>
                    <div className="form-group">
                        <label>Coupon (%)</label>
                        <input  
                            type="number" 
                            id="amount"
                            value={this.state.amount} 
                            onChange={this.handleChange}
                            className="form-control" 
                            placeholder="Enter value of giftcode" />
                    </div>
                    <button className="btn btn-primary btn-block">Create</button>
                </form>
            );
        }
    }
}