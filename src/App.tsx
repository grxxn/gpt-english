import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Header from "components/Header";
import Footer from "components/Footer";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Main from "pages/Main";
import Tie from "pages/Tie";
import Rie from "pages/Rie";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} /> {/* 메인 */}
        <Route path="/login" element={<Login />} /> {/* 로그인 */}
        <Route path="/signup" element={<Signup />} /> {/* 회원가입 */}
        <Route path="/tainen" element={<Tie />} />  {/* 대화하기 */}
        <Route path="/reinen" element={<Rie />} />  {/* 기록하기 */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
