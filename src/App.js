//  import Layout from './containers/Layout/Layout';
import classes from './app.module.css';
import Home from './components/Home/Home';
import NavBar from './containers/NavBar/NavBar';
import ContactMe from './components/ContactMe/ContactMe';
import { Route, Switch } from 'react-router';
import Resume from './containers/Layout/Resume';
import { BrowserRouter } from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
    <div className={classes.app}>
      <NavBar/>
      <Switch>
    <Route exact path="/portfolio/">
         <Home/>
           </Route>
    <Route path="/portfolio/resume">
         <Resume/>
           </Route>
    <Route path="/portfolio/contact">
         <ContactMe/>
           </Route>
      </Switch>
    </div>
    </BrowserRouter>
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