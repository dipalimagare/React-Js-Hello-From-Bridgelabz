//import logo from './logo.svg';
import React from 'react';
import './App.css';
import img from './BL-logo.png'

<p>
BridgeLabz Solutions is one such company based in Mumbai and Bengaluru that offers a free-of-cost intensive four-month fellowship program for aspiring engineers. This company also provides a job placement with some of the leading software companies on completion of this program.
</p>
class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      title: 'Hello From Bridgelabz !!!',
      userName: ' ',
      nameError: 'Something went Wrong'
    }
  }
  onClick = ($event) => {
    console.log("Save Button is Clicked !", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = ($event) => {
    console.log("value is ", $event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2}$');
    this.setState({userName: $event.target.value})
    if (nameRegex.test($event.target.value)) {
      this.setState({nameError: ''})
    } else {
      this.setState({nameError: 'Name is Incorrect'})
    }
    }

  render() {
    return (
      <div>
        <div>
        <h1>{this.state.title}</h1>
        <h2>Hello {this.state.userName} from bridgelabz</h2>
        <img src={img} onClick={this.onClick}
        alt="This Bridgelabz logo: we gaurantee your dream job !" />
        </div>
        <div>
        <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
        </div>
      </div>
      
    );
  }
}
export default App;
