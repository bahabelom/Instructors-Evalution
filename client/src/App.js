import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/signup";
import Login from "./pages/login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";
// //import Share from "../share/Share";
// import Axios from "axios";
// function App() {
//   const [message, setMessage] = useState("");

//   // useEffect(() => {
//   //   fetch("http://localhost:8000/message")
//   //     .then((res) => res.json())
//   //     .then((data) => setMessage(data.message));
//   // }, []);

//   const getData = async () => {
//     Axios.get("http://localhost:8800/message").then((res) => {
//       setMessage(res.data.message);
//     });
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div className="App">
//       <h1>{message}</h1>
//       {/* <Share /> */}
//     </div>
//   );
// }

// export default App;
