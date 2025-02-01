import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-black text-white min-h-[100vh] border-white border">
        <Header />
        <main className="p-2 bg-neutral-900 ">
         
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
