import React from "react";
import { Routes, Route } from "react-router-dom";

// layouts
import GeneralLayout from "../layouts/GeneralLayout";
import ProfileLayout from "../layouts/ProfileLayout";

// page
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import SingleProductPage from "./SingleProductPage";
import ShoppingBagPage from "./ShoppingBagPage";
import ProfilePage from "./ProfilePage";


const renderWithLayout = (Component, Layout = GeneralLayout) => (
  <Layout>
    <Component/>
  </Layout>
);


const Router = () => (
  <Routes>
    {/* <Route path="/" element={renderWithLayout(HomePage, GeneralLayout)}/> */}
    <Route path="/" element={renderWithLayout(HomePage)}/>
    <Route path="/categories" element={renderWithLayout(CategoryPage)}/>
    <Route path="/categories/:categoryName" element={renderWithLayout(CategoryPage)}/>
    <Route path="/products/:productId" element={renderWithLayout(SingleProductPage)}/>
    <Route path="/shopping-card" element={renderWithLayout(ShoppingBagPage)}/>
    <Route path="/profile" element={renderWithLayout(ProfilePage, ProfileLayout)}/>
  </Routes>
);

export default Router;
