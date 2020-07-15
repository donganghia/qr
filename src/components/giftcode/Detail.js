import React, { Component } from "react";
import   { auth, database }  from "../../api/Firebase";

export default class DetailGiftCode extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
            key: null,
            amount: null,
            active: null,
            created_date: null
      };
    }
    componentDidMount(props){
      this.getGiftRef().once('value').then((dataSnapshot) => {
            console.log(dataSnapshot.val());
            this.setState({
                  active: dataSnapshot.val().active,
                  amount: dataSnapshot.val().amount,
                  created_date: dataSnapshot.val().created_date,
            });
      });
      

    }

    getGiftRef = () => {
      const query = new URLSearchParams(this.props.location.search);
      this.setState({key : query.get('key')});
      return database.ref('giftcode').child(query.get('key'));
    }

    handleSubmit = (e) => {
      e.preventDefault();
    }

    handleSubmit = (e) => {
      e.preventDefault();
      let today = new Date();
      let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      let key = this.state.key;

      database.ref('giftcode/'+ key).update({
          updated_date: date,
          active: 0
      })
      .then(result => {
          console.log("success");
          //redirect url
          this.setState({
            active : 0
         })
      })
      .catch(error => {
          console.log(error.message);
      });  
  }

    render() {
      let formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
      });

      return (
            <form onSubmit={this.handleSubmit}>
                  <h3>Thông tin Giftcode</h3>
                  <div className="form-group">
                        <label>Mã số</label>
                        <input  
                              disabled
                              value={this.state.key} 
                              className="form-control" />

                        <label>Giá trị</label>
                        <input  
                              disabled
                              value={this.state.amount !== null ? this.state.amount+'%' : null}
                              className="form-control" /> 

                        <label>Trạng thái</label>    
                        <input  
                              disabled
                              value={this.state.amount !== null ? ( this.state.active === 1 ? "Chưa sử dụng" : "Đã sử dụng") : null } 
                              className={this.state.active === 1 ? "form-control" : "form-control text-danger"} />
                  </div>
                  <button 
                        disabled={this.state.active === 0} 
                        className={this.state.active === 1 ? "btn btn-primary btn-block" : "btn btn-secondary btn-block"}>Sử dụng</button>
            </form>
      );
    }
}