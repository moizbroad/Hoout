import { useState } from "react";
import "./App.css";
import "./main.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import Layout from "./components/Layout/Layout";
<<<<<<< HEAD
=======
import IsAuthenticated from "./components/Auth/IsAuthenticated";
import Dashboard from "./Pages/Dashboard";
import Inbox from "./Pages/Inbox";
import OrderList from "./Pages/OrderList";
import Products from "./Pages/Products";
>>>>>>> 54b8e05a45f585646f1ca6150f200ca919d1ae36
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

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
<<<<<<< HEAD
         <Route element={<Layout />} > 
         <Route path="/signin" element={<Signin />} />
         <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landingpage />} />
=======
          <Route element={<Layout />}>
            <Route element={<IsAuthenticated />}>
              <Route path="/" element={<Landingpage />} />
              <Route path="/shop-page" element={<ShopPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/order-list" element={<OrderList />} />
            </Route>
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
>>>>>>> 54b8e05a45f585646f1ca6150f200ca919d1ae36
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
