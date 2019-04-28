import React, {Component} from 'react';
import './App.css';

class App extends Component {

state = {
  text: " ",
  error: "not found"
}

handleDateChange = (e) => {
 const value = this.refs.number.value;
 console.log(value); 
 /*fetch - ządanie asynchroniczne, tworzy obietnice (promise) - 
 w czasie tworzenia ma status nierozstrzyggnieta
 majac odpowiedz od serwera ma status rozstrzygnieta - spelniona odrzucona*/
 fetch(`http://numbersapi.com/${value}/year?json`)
 /* po otrzymaniu odp z serwera wywoluje sie metoda then */
 .then(res => {
   if(res.ok) {
     return res;
   }
   throw Error(res.status);
 })
 .then(res => res.json())
 .then(data => this.setState({
   text: data.text
 }))
 .catch(err => {
   this.setState({text: "Error"})
 })

}
  render () {
    return (
      <div className="style">   
        <i class="fas fa-landmark"></i>
        <h1> Enter the year to find out what happened </h1>
        <h1> in the History </h1>
        <input onChange = {this.handleDateChange} type="text" ref="number"/>
        <p> {this.state.text} </p>
        </div>
    );
  }

}

export default App;