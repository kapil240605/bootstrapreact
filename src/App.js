import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';

{/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
*/}

function App() {

  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  let togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "rgb(8 55 102)";
      document.body.style.color = "white";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("light mode has been enabled", "success");
    }
  }

  return (
    <>
      <NavBar About="about us" title="Reactboot" cont="Contact us" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      {/*<Router>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextArea heading="Enter the Text to Analyze Bellow " showalert={showalert} />
          </Route>
        </Switch>
  </Router>*/}
      <TextArea heading="Enter the Text to Analyze Bellow " showalert={showalert} />
      {/*<About />*/}

    </>
  );
}

export default App;
