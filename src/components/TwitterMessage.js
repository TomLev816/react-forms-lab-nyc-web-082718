import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleTwitterInput = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  charactersLeft = () => {
    let charsLeft = this.props.maxChars - this.state.value.length
    return <h3>Yo only {charsLeft} son </h3>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleTwitterInput}/>
        <div>{this.charactersLeft()}</div>
      </div>
    );
  }
}

export default TwitterMessage;
