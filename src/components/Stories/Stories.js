import React from 'react';
import Axios from 'axios';

export default class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          heroesAll: []
        };
      }

      componentDidMount() {
        Axios.get("")
          .then(response => response.data)
          .then(data =>
            this.setState({
            //   heroesAll: data
            })
          );
      }

      onChange = event => {
        // const [value, setValue] = React.useState('');
        
        localStorage.getItem('myValueInLocalStorage')
        console.log(localStorage.getItem('myValueInLocalStorage'))
      };

    render(){
       let heroes=localStorage.getItem('myValueInLocalStorage')
       console.log(heroes.name)
        // console.log(this.props.match.params)
        return(
            <div className="Home">
                <div>Hello {heroes.name}</div>
                <button onClick={this.onChange}>test localStorage</button>

            </div>
        )

    }
}