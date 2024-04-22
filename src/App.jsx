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
import CustomWoodPage from "./Pages/CustomWoodPage";
import AddToCart from "./Pages/AddToCart";
// import ShoppingCart from "./components/CartSections/ShoppingCart";
import AddressCard from "./components/Address/AddressCard";
import OrderHistory from "./components/Address/OrderHistory";
import Wishlist from "./components/Address/Wishlist";
// import Test from "./Pages/Test";
import Test from "./Pages/Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<IsAuthenticated />}>
              <Route path="/" element={<Landingpage />} />
              {/* <Route path="/shop-page" element={<ShopPage />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/order-list" element={<OrderList />} />
              <Route path="/wood-page" element={<CustomWoodPage />} />
              <Route path="/cart" element={<AddToCart />} />
              <Route path="/address" element={<AddressCard />} />
              <Route path="/orderHistory" element={<OrderHistory />} />
              <Route path="/wishlist" element={<Wishlist />} />
              {/* <Route path="/shop-page" element={<ShoppingCart />} /> */}
              <Route path="/test" element={<Test />} />
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
