import Navbar from './components/navBar';
import Home from './components/home';
import React from "react"

class App extends React.Component {

  constructor() {
    super();
    this.handleBodyChange.bind(this);
    this.state = {
      bodyChild: <Home />
    }
  }

  handleBodyChange = (component) => {
    this.setState({ bodyChild: component })
  }

  render() {
    return (
      <>
        <Navbar handleBodyChange={this.handleBodyChange} />
        {this.state.bodyChild}
      </>
    );
  }
}

export default App;
