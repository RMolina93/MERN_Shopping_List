import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'; //This is for adding bootstrap.

//This would be what it would be rendered in our webpage
// Is the main div, so we need to generate components in other files, and add them to it.
// This way everything is encapsulated.

function App() {
  return (
    <div className="App">
        <AppNavbar></AppNavbar>
    </div>
  );
}

//Finally, this module exports the function APP, which is used by index.js to render the webapp.
export default App;
