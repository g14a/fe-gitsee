import React, { Component } from "react";
import "./App.css";
import UserSearchFrom from "./components/SearchField";
import ReactNotification from "react-notifications-component";
import PageComponent from "./components/PageComponent";
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      error: null,
    };
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/">
            <ReactNotification />
            <UserSearchFrom  handleInputChange = {this.handleInputChange} username = {this.state.username} />
            <Footer />
          </Route>
          <Route exact path="/user">
            <PageComponent username = {this.state.username} />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

function Footer() {
  return (
    <footer className="footer" style={{ color: "white", marginTop: "30%" }}>
      <p>
        Built with GitHub V4 and React JS. Source is available on{" "}
        <a href="https://github.com/g14a/gitsee" style={{ color: "white" }}>
          Github
        </a>{" "}
      </p>
    </footer>
  );
}

export default App;
