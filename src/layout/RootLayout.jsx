import React from "react";
import { Navbar } from "../components/navigation-bar/navigation-container";
import { Footer } from "../components/Footer/footer";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};
