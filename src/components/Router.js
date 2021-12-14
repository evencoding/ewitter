import React from "react";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import { HashRouter, Route, Routes } from "react-router-dom";

function Router({ isLoggedIn }) {
  return (
    <HashRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </HashRouter>
  );
}

export default Router;
