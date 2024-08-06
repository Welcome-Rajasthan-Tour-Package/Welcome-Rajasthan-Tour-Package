import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import TourPackage from "./Pages/Tour Package/TourPackage";
import Privacy from "./Pages/Privacy/Privacy";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import CursorEffect from "./Components/CursorEffect";
import ContactWidget from "./Components/ContactWidget";
import BlogDetails from "./Pages/Blog/Blog-Details/BlogDetails.jsx";
import { BlogContent } from "./Pages/Blog/Blog-Details/BlogContent.js";
import { Helmet } from "react-helmet";
// import TourPackageDeatils from "./Pages/Tour Package/TourPackage-Details/TourPackageDeatils.jsx";
// import { TourPackageContent } from "./Pages/Tour Package/TourPackage-Details/TourPackageContent.js";
// import Loader from "./Components/Loader.jsx";

function App() {
  const BlogContetData = BlogContent;
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Helmet>
        <title>Welcome Rajasthan Tour Package</title>
        <meta
          name="description"
          content="Discover the vibrant culture and majestic forts of Rajasthan with Welcome Rajasthan Tour Package. Experience royal heritage, desert landscapes, and colorful festivals. Book your adventure today!"
        />
        <meta name="keywords" content="welcome rajasthan tour package" />
        <meta name="author" content="Welcome Rajasthan Tour Package Team" />
        <link
          rel="canonical"
          href="https://www.welcomerajasthantourpackage.com/"
        />
      </Helmet>
      <CursorEffect />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tourpackage" element={<Outlet />}>
          <Route index element={<TourPackage />} />
          {/* <Route
            path="bikaner"
            element={<TourPackageDeatils content={TourPackageContent[0]} />}
          />
          <Route
            path="jodhpur"
            element={<TourPackageDeatils content={TourPackageContent[1]} />}
          />
          <Route
            path="jaipur"
            element={<TourPackageDeatils content={TourPackageContent[2]} />}
          />
          <Route
            path="udaipur"
            element={<TourPackageDeatils content={TourPackageContent[3]} />}
          />
          <Route
            path="jaisalmer"
            element={<TourPackageDeatils content={TourPackageContent[4]} />}
          />
          <Route
            path="pushkar"
            element={<TourPackageDeatils content={TourPackageContent[5]} />}
          /> */}
        </Route>
        <Route path="/blog" element={<Outlet />}>
          <Route index element={<Blog />} />
          {BlogContetData.map((BlogContent, index) => (
            <Route
              key={index}
              path={BlogContent.links}
              element={<BlogDetails content={BlogContent} />}
            />
          ))}
        </Route>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ContactWidget />
      <Footer />
    </>
  );
}

export default App;
