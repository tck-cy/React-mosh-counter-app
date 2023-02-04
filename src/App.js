import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = { 
    counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ]
 };

 constructor(props) {
  super(props);
  console.log('constructor');
 };

 componentDidMount() {
  console.log('did mount works');
 };

 handleDecrement = counter => {
  console.log('Decrement works');
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counter };
  counters[index].value--;
  this.setState({ counters });
 };

 handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter };
    counters[index].value++;
    this.setState({ counters });
 };

 handleReset = () => {
      const counters = this.state.counters.map(c => { 
        c.value = 0;
        return c;
    });
    this.setState({ counters });     
 };
 
 handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
 };

  render() { 
    console.log('also works 2');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container" >
          <Counters 
          onDecrement = { this.handleDecrement }
          counters = { this.state.counters }
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
