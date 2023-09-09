import React from "react";
import Main from "../layout/main/Main";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

const HomePage = ({ event }) => {
  return (
    <div className="m-[30px]">
      <Header />
      <Main event={event} />
      <Footer />
    </div>
  );
};

export default HomePage;
