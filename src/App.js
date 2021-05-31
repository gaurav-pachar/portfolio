//  import Layout from './containers/Layout/Layout';
import classes from './app.module.css';
import Home from './components/Home/Home';
import NavBar from './containers/NavBar/NavBar';
import About from './components/AboutMe/About';
import Skills from './components/skills/skills';
import Academics from './components/Academics/Academics';
import Experience from './components/Experince/Experience';
import ContactMe from './components/ContactMe/ContactMe';
import { Route, Switch } from 'react-router';
import Layout from './containers/Layout/Layout';


const App = (props) => {
  return (
    <div className={classes.app}>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Academics/>
      <Experience/>
      <Switch>
    <Route exact path="/contact">
         <ContactMe/>
           </Route>
      </Switch>
    </div>
  );
}

export default App;


/*
<Switch>
      <Route exact path="/">
           <Home/>
           </Route>
      <Route path="/layout">
          <Layout/>
          </Route>
      <Route path="/contact">
         <ContactMe/>
           </Route>
      </Switch>
*/