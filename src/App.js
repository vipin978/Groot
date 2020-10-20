import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';
import Normal from './Components/Normal'
import DropDown from './Components/DropDown'
import Radio from './Components/Radio'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      name :null,
      age :"Age",
      country:["india"],
      radio:"Gender",
      languages:["python"],
      email:"Email"
    }
  }

  loadData = (data) => {
    this.setState({
      name : data.name,
      age : data.age,
      country:data.country,
      radio: data.gender,
      languages:data.languages,
      email:data.email
    })
  }
  // 
  // componentDidMount() {
  //   fetch('https://frozen-reaches-78276.herokuapp.com/')
  //   .then(res => res.json())
  //   .then(data =>
  //     this.loadData(data))
  //   }

  render() {
    return (
      <main class="pa4 black-80">
  <form class="measure center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Grootan Text</legend>
      <div class="mt3">
          <Normal  name = {this.state.name}/>
      </div>
      <div class="mv3">
          <Normal  name = {this.state.age}/>
      </div>
      <div class="mv3">
      </div>
          {this.state.country === null?<DropDown name = {null}/> :<DropDown name = {"Country : "} list = {this.state.country}/>}
      <div class="mv3">
          <Radio  name = {this.state.radio}/>
      </div>
      <div class="mv3">
        {this.state.languages === null ?<DropDown name = {null}/> :<DropDown name = {"Languages : "} list = {this.state.languages}/>}
      </div>
      <div class="mv3">
          <Normal  name = {this.state.email}/>
      </div>
    </fieldset>
    <div class="">
      <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
    </div>
  </form>
</main>
    )
}
}


export default App;
