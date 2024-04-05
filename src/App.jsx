import { useState } from "react";
import "./App.css";
import "./main.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import Layout from "./components/Layout/Layout";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <div className="bg-blue-500  text-white p-4">
          This is a div with Tailwind CSS styles
        </div>
      </div> */}

      <BrowserRouter>
        <Routes>
         <Route element={<Layout />} > 
         <Route path="/signin" element={<Signin />} />
         <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
