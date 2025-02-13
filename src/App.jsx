import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/products/:category" element={user ? <ProductList /> : <Navigate to={"/login"}/>} />
        <Route path="/product/:id"  element={ user ?<Product /> : <Navigate to={"/login"}/> } />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to={"/login"}/>} />
        <Route path="/success" element={<Success />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
  // return <ProductList/>;
  // return <Product/>;
  // return <Register/>;
  // return <Login/>;
  // return <Cart/>;
};

export default App;
