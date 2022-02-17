import { AppBar } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
const axios = require('axios').default;

const Layout = () => {
  return (
    <>
      <AppBar>
        <nav >
          <ul style={{ display: "flex", listStyle: "none", columnGap: "10px" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/signin" onClick={() => {
                const url = 'http://localhost:3003/auth/logout/'

                let headers = {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + window.sessionStorage.getItem("token")

                }
                // Make a request for a user with a given ID
                axios.post(url, {
                  refresh_token: window.sessionStorage.getItem("refresh"),
                },{ headers: headers })
                  .then(function (response) {
                    // handle success
                    console.log(response.data);
                    window.sessionStorage.removeItem("token");
                    window.sessionStorage.removeItem("refresh");
                  })


              }}>Logout</Link>
            </li>
          </ul>
        </nav>
      </AppBar>

      <Outlet />
    </>
  )
};

export default Layout;
