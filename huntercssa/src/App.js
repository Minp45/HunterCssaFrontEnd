import './App.css';

//Router
import { Route, Routes } from "react-router-dom";
//Components

import {
  HomePageContainer,
  NavigationBarContainer,
  AboutPageContainer,
  EventPageContainer,
} from './components/containers';

function App() {
  return (
    <>
      <NavigationBarContainer />
      <Routes>
        <Route index path="/" element={<HomePageContainer />} />
        <Route index path="/about" element={<AboutPageContainer />} />
        <Route index path="/event" element={<EventPageContainer />} />

      </Routes>
    </>
  );
}

export default App;
