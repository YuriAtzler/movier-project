import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function AppRoutes() {
    return (
      <>
        <BrowserRouter>
        <Header />
        <Routes> 
            <Route />
            <Route />
            <Route />
            <Route />
        </Routes > 
        <Footer />
      </BrowserRouter>
      </>
    );
  };