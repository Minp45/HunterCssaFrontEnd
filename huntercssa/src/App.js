import './App.css';

//Router
import { Switch, Route } from "react-router-dom";
//Components

import {
  HomePageContainer,

} from './components/containers';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={HomePageContainer} />
    </Switch> 
  );
}

export default App;
