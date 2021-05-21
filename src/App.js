//  import Layout from './containers/Layout/Layout';
import classes from './app.module.css';
import Home from './components/Home/Home';
import NavBar from './containers/NavBar/NavBar';
import About from './components/AboutMe/About';
import Skills from './components/skills/skills';
import Academics from './components/Academics/Academics';
import Experience from './components/Experince/Experience';
import ContactMe from './components/ContactMe/ContactMe';


const App = () => {
  return (
    <div className={classes.app}>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Academics/>
      <Experience/>
      <ContactMe/>
    </div>
  );
}

export default App;


