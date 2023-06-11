import './App.css';

//Router
import { Route, Routes } from "react-router-dom";
//Components

import {
  HomePageContainer,
  NavigationBarContainer,
  AboutPageContainer,
} from './components/containers';

function App() {
  return (
    <>
      <NavigationBarContainer />
      <Routes>
        <Route index path="/" element={<HomePageContainer />} />
        <Route index path="/about" element={<AboutPageContainer />} />
      </Routes>
    </>
  );
}

export default App;
