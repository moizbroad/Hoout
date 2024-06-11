import React from "react";
import { Routes as AppRoutes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import IsAuthenticated from "./components/Auth/IsAuthenticated";
import AddressCard from "./components/Address/AddressCard";
import OrderHistory from "./components/Address/OrderHistory";
import Wishlist from "./components/Address/Wishlist";

import {
  About,
  Landingpage,
  Dashboard,
  Inbox,
  OrderList,
  Products,
  Signup,
  Signin,
  ShopPage,
  CustomWoodPage,
  AddToCart,
  UserProfile,
  CustomizedProduct,
  AddNewProduct,
  MyAccount,
} from "./pages";

import { TermsConditions } from "./pages/TermsConditions";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { ForgetPassword } from "./pages/ForgetPassword";
import { Faq } from "./pages/Faq";
import { ResetPassword } from "./pages/ResetPassword";

function Routes() {
  return (
    <AppRoutes>
      <Route element={<Layout />}>
        <Route element={<IsAuthenticated />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/shop-page" element={<ShopPage />} />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/new-product" element={<AddNewProduct />} />
          <Route path="/inbox/" element={<Inbox />} />
          <Route path="/order-list/" element={<OrderList />} />
          <Route path="/wood-page" element={<CustomWoodPage />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/customized-product" element={<CustomizedProduct />} />
          <Route path="/user-profile" element={<UserProfile />} />
          {/* <Route path="/address" element={<AddressCard />} /> */}
          {/* <Route path="/orderHistory" element={<OrderHistory />} /> */}
          {/* <Route path="/wishlist" element={<Wishlist />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </AppRoutes>
  );
}

export default Routes;
