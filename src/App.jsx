// import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Header from "./header/header";
import Main from "./main/main";
import Footer from "./Footer/Footer";
import LogIn from "./logIn/login";
import Signup from "./Signup/signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />,
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element = {<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

