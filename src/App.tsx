import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Header from "components/Header";
import Footer from "components/Footer";
import Login from "components/Login";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="" element={} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
