import React from 'react';
import './App.css';
import UserSearchFrom from './components/SearchField';

function App() {
  return (
    <div className="App">
      <UserSearchFrom />
      
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer" style={{color: "white", marginTop: '30%'}}>
      <p>Built with Golang Github API and React JS. Source is available on <a href="https://github.com/g14a/gitsee" style={{color: 'white'}}>Github</a> </p>
    </footer>
  )
}

export default App;
