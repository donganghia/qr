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
                        <h4 className="text-info" >Quà tặng mua hàng</h4>
                        <img className="img-thumbnail rounded" src={'https://scontent.fkix2-2.fna.fbcdn.net/v/t1.15752-9/96215164_2809475875953509_3584480641820917760_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=axqVRgu-2i0AX8g-EW0&_nc_ht=scontent.fkix2-2.fna&oh=4c05a0d738effa6be287ffb75533e82e&oe=5EDE3E18'} />
                        <img className="" src={'https://chart.googleapis.com/chart?cht=qr&chs=250&chl='+url+'&choe=UTF-8'} />
                  </div>
            </form>
      );
    }
}