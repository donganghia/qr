import React, { Component } from "react";

export default class QrGiftCode extends Component {
    state = {
      key: null 
    }  

    componentDidMount(props){
      this.setState({
            key : this.props.location.state.key
      })
    }

    handleChange = (e) => {
      this.setState({
            [e.target.id] : e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
    }

    render() {
      //let url = 'http://localhost:3000/130185?key=' + this.state.key;
      let url = 'https://senorita-73559.web.app/130185?key=' + this.state.key;
      console.log(this.state.key);

      return (
            <form >
                  <div className="text-center form-group">
                        <h4 className="text-info" >Quà tặng mua hàng trị giá 20%</h4>
                        <img className="img-thumbnail rounded" src={'/giftcode.png'} />
                        <img className="" src={'https://chart.googleapis.com/chart?cht=qr&chs=250&chl='+url+'&choe=UTF-8'} />
                  </div>
            </form>
      );
    }
}