import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.jsx'
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import About from "./component/About/About.jsx";
import Contact from "./component/ContactUs/Contact.jsx";
import Layout from "./Layout.jsx";
import User from "./component/User/User.jsx";
import Github from "./component/Github/Github.jsx";
import GithubLoader, { githubLoaderInfo } from "./component/Github/GithubLoader.jsx";

//vid 38:03 easy way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="github" element={<Github />} />
      {/* Using loader for API calls optimized way  
      when we hoover our cursor hover over the gitHubLoader option then the event already has been called, at that point the api will be called and the data fetching will be done at the time of hover before use effect and keep the data in cache, faster then uesEffect  */}
      <Route
      // we need to use a usLoader hook to display the data 
        loader={githubLoaderInfo}
        path="githubLoader"
        element={<GithubLoader />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
