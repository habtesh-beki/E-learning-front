// import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Header from "./header/header";
import Main from "./main/main";
import Footer from "./Footer/Footer";
import LogIn from "./logIn/login";
import Tutorial from './Tutorial/Tutorial'
import Signup from "./Signup/signup";
import CourseSearch from "./searchItems/CourseSearch";
import TutorialMob from './Tutorial/TutorialMob'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />,
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element = {<Signup />} />
        <Route path="/tutorial" element ={<Tutorial />} />
        <Route path="/tutorialmob" element = {<TutorialMob />} />
        <Route path="/searchCourse" element = {<CourseSearch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

