import './App.css';

//Router
import { Route, Routes } from "react-router-dom";
//Components

import {
  HomePageContainer,
} from './components/containers';

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePageContainer />} />
      </Routes>
    </>
  );
}

export default App;
