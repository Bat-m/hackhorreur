import React from "react";

import "./Forms.css";
// import { TweenLite } from "gsap";
import { TimelineLite } from "gsap"; // import Power2!


export default class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.labelOne = React.createRef(); // shiny new React 16.3 ref API!
    this.labelTwo = React.createRef();
    this.inputOne = React.createRef();
    this.state={
        firstName:'',
        lastName:'',
    }
  }

  componentDidMount() {
    const tl = new TimelineLite();
    tl.to(this.labelOne.current, 0, { display: "inherit" })    
      
  }

  componentDidUpdate() {
    const tl = new TimelineLite();
    const temp=this.state.firstName
    console.log(temp)
    temp&&tl.to(this.labelOne.current, 0, { display: "none" })

  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    // alert("hello : " + this.state.firstName+' '+this.state.lastName);
    
  }

  handleChange = event => {
    // const temp=this.state.firstName
    // if(temp){
    //     console.log('hop ' +temp)
    // }else{
    //     console.log('nop ')
    // }
    this.setState({firstName: event.target.value});
    console.log(this.state.firstName)
  }


  render() {
      console.log(this.state.firstName)
    return (
      <div className="forms">
        <form onSubmit={this.handleSubmit}>
          <label className="labelOne" ref={this.labelOne}>
            Nom :{this.state.firstName}
            <input
              type="text"
              onChange={this.handleChange}
              ref={this.inputOne}
            /><small>Type 30 character max</small>
          </label>
          <label className="labelTwo" ref={this.labelTwo}>
            Prenom :
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleChangeLastName}
            /><small>Type 30 character max</small>
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    );
  }
}
