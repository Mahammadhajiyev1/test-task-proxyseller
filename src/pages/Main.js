import "./Main.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "../components/userList";
import UserPosts from "../components/userPosts";
import PageNotFound from "../components/pageNotFound";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/users/:userId/posts' element={<UserPosts />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default Main;
