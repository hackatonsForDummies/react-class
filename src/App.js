import React from "react";
import './App.css';
import Child from './components/Child';

export default class App extends React.Component {
  state = {
    name: '',
    surname: '',
  };

  handleReset = this.handleReset.bind(this);

  componentDidMount() {
    const valorDeUrl = 'Pablo';
    this.setState({ name: valorDeUrl })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      console.log(`No son iguales. El anterior es ${prevState.name} y el nuevo es ${this.state.name}`)
    }
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({ name: e.target.value });
  }

  handleSurname(e) {
    e.preventDefault();

    this.setState({ surname: e.target.value });
  }

  handleReset() {
    this.setState({ name: '' });
    this.setState({ surname: '' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" value={this.state.name} onChange={e => this.handleChange(e)} />
          <input type="text" value={this.state.surname} onChange={e => this.handleSurname(e)} />

          <Child name={this.state.name} surname={this.state.surname} reset={this.handleReset} />
        </header>
      </div>
    )
  }
}
