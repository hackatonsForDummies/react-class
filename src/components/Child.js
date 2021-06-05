import React from "react";

export default class Child extends React.Component {
  handleButtonClick = this.handleButtonClick.bind(this);

  handleButtonClick() {
    this.props.reset();
  }

  render() {
    const { name, surname } = this.props;

    return (
      <>
        <span>El nombre es: {name}</span>
        <span>El apellido es: {surname}</span>
        <button onClick={this.handleButtonClick}>Resetear valores</button>
      </>
    )
  }
}
