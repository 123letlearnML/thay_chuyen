import React from "react";
import Header from "./Header/Header";
import Banner from "./banner/Banner";
import './App.css';
import Footer from "./footer/Footer";
import GetThuongHieu from "./slideSanPham/GetThuongHieu";
import SlideAnh from "./slide/SlideAnh";
import MainThanWeb from "./slideSanPham/MainThanWeb";
import { AuthProvider } from "./context/context";  // Import AuthProvider

function App() {
  return (
    <AuthProvider>
      <AppContent />
      </AuthProvider>
  );
}

function AppContent() {
  return (
    <>
      <Header />
      <Banner />
      <MainThanWeb />
      <SlideAnh />
      <GetThuongHieu />
      <Footer />
    </>
  );
}

export default App;
