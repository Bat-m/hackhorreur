import React from "react";
import Axios from "axios";

export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 6,
      title: "nop",
    };
  }

  componentDidMount() {
    
    Axios.get("http://192.168.1.145:8000/characters/everyone")
      .then(response => response.data)
      .then(data =>console.log(data))
      } ;
  
      // handleChange = event => {
      //   this.setState({ name: event.target.value });
      // }

      // handleSubmit = event => {
      //   event.preventDefault();
      //   const user = [{id:8,title:'ohyeah'}];
      //   Axios.post('http://192.168.1.72:8000/item/add',JSON.stringify({id:9,title:'again'}))
      // .then(function (response) {
      //     console.log(response);
      // }).catch(function (error) {
      //     console.log(error);
      // });
    //}
    
      render() {
        return (
          <div>
            {/* <form onSubmit={this.handleSubmit}>
              <label>
                Person Name:
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <button type="submit">Add</button>
            </form> */}
          </div>
        )
      }
}
