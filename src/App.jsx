import { useState } from "react";
import "./App.css";
import "./main.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import Layout from "./components/Layout/Layout";
import IsAuthenticated from "./components/Auth/IsAuthenticated";
import Dashboard from "./Pages/Dashboard";
import Inbox from "./Pages/Inbox";
import OrderList from "./Pages/OrderList";
import Products from "./Pages/Products";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import ShopPage from "./Pages/ShopPage";
import CustomWoodPage from "./Pages/CustomWoodPage";
import AddToCart from "./Pages/AddToCart";
import UserProfile from "./Pages/UserProfile";
import CustomizedProduct from "./Pages/CustomizedProduct";
import AddNewProduct from "./Pages/AddNewProduct";
import About from "./Pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<IsAuthenticated />}>
              <Route path="/" element={<Landingpage />} />
              <Route path="/shop-page" element={<ShopPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/order-list" element={<OrderList />} />
              <Route path="/wood-page" element={<CustomWoodPage />} />
              <Route path="/cart" element={<AddToCart />} />
              <Route path="/new-product" element={<AddNewProduct />} />
              <Route
                path="/customized-product"
                element={<CustomizedProduct />}
              />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
