import React from 'react';
import './App.css';
// import UserSearchFrom from './components/SearchField';
// import ReactNotification from 'react-notifications-component'
import PageComponent from './components/PageComponent';

function App() {
  return (
    <div className="App">
      <PageComponent />

      {/* <ReactNotification />
      <UserSearchFrom />

      <Footer /> */}
    </div>
  );
}

// function Footer() {
//   return (
//     <footer className="footer" style={{ color: "white", marginTop: '30%' }}>
//       <p>Built with GitHub V4 and React JS. Source is available on <a href="https://github.com/g14a/gitsee" style={{ color: 'white' }}>Github</a> </p>
//     </footer>
//   )
// }

export default App;
