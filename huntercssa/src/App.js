import './App.css';

//Router
import { Route, Routes } from "react-router-dom";
//Components

import {
  HomePageContainer,
  NavigationBarContainer,
} from './components/containers';

function App() {
  return (
    <>
      <NavigationBarContainer />
      <Routes>
        <Route index path="/" element={<HomePageContainer />} />
      </Routes>
    </>
  );
}

export default App;
