import { Route, Routes } from "react-router-dom";
import AllMeetUps from "./components/pages/AllMeetUps";
import Favourites from "./components/pages/Favourites";
import NewMeetUps from "./components/pages/newMeetUps";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route element={<AllMeetUps />} path="/" exact />
        <Route element={<NewMeetUps />} path="/new-meetup" />
        <Route element={<Favourites />} path="/favourites" />
      </Routes>
    </div>
  );
}

export default App;
