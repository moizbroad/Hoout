import { useState } from "react";
import "./App.css";
import "./main.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import Layout from "./components/Layout/Layout";

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
          <Route path="/" element={<Landingpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
