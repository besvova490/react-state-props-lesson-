import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// layouts
import GeneralLayout from "../layouts/GeneralLayout";
import ProfileLayout from "../layouts/ProfileLayout";

// page
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import SingleProductPage from "./SingleProductPage";
import ShoppingBagPage from "./ShoppingBagPage";
import ProfilePage from "./ProfilePage";
import WishList from "./WishList";
import LoginPage from "./Auth/LoginPage";


const renderWithLayout = (Component, Layout = GeneralLayout) => (
  <Layout>
    <Component/>
  </Layout>
);


const Router = () => {
  const isAuthorized = useSelector(state => state.auth.isAuthorized);

  const protectedRouter = (Component) => {
    if (!isAuthorized) {
      return <Navigate to="/login"/>
    }
  
    return renderWithLayout(Component, ProfileLayout);
  }
  
  return (
    <Routes>
      {/* <Route path="/" element={renderWithLayout(HomePage, GeneralLayout)}/> */}
      <Route path="/" element={renderWithLayout(HomePage)}/>
      <Route path="/categories" element={renderWithLayout(CategoryPage)}/>
      <Route path="/categories/:categoryName" element={renderWithLayout(CategoryPage)}/>
      <Route path="/products/:productId" element={renderWithLayout(SingleProductPage)}/>
      <Route path="/shopping-card" element={renderWithLayout(ShoppingBagPage)}/>
      <Route path="/whish-list" element={renderWithLayout(WishList)}/>
      <Route path="/profile" element={protectedRouter(ProfilePage)}/>
      <Route path="/login" element={renderWithLayout(LoginPage)}/>
    </Routes>
  )
};

export default Router;
