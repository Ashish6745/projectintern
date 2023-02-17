import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import NewsLetter from "./components/NewsLetter";
import Cards from './components/Cards'
import Function from './components/Functions'
import Review from "./components/Review";
import Table from './components/Table'
import Last from './components/Last'
 import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Analytics/>
        <NewsLetter/>
        <Cards/>
        <Function/>
        <Review/>
        <Table/>
        <Last/>
        <Footer/>
    </div>
  );
}

export default App;
