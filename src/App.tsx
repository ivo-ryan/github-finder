import { Outlet } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.logo} >
      <FaGithub  />
      </div>
     
      <Outlet />
    </div>
  );
}

export default App;
