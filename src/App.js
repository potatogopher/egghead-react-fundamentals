import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render(){
    let txt = this.props.txt
    return (
      <div>
        <h1>{txt}</h1>
        <Widget update={this.update.bind(this)} />
        <p>{this.state.txt}</p>
        <b>bold</b><br />
        <Button>I <Heart /> React</Button>
        <Title text="my validated title"/>
      </div>
      )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default text"
}

const Widget = (props) => 
  <input type="text" onChange={props.update} />

const Button = (props) => <button>{props.children}</button>

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`)
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was too short`)
    }
  }
}

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

export default App
