import './App.css';
import { useEffect, useState } from 'react';
import CarFront from './components/CarFront';
import { Route, Routes } from 'react-router-dom';
import Tour from './components/Tour';
import City from './components/City';


function App() {
  //로그인여부 체크
  const [isAuthenticated, setAuth] = useState(false);
  const loginAuth = () => {
    setAuth(true)
  }
  const logoutAuth = () => {
    setAuth(false);
    //토큰 삭제
    sessionStorage.removeItem("jwt")
  }
  //마운트될때 자동실행
  useEffect(()=>{
    if(sessionStorage.getItem("jwt")) {
      setAuth(true);
    }
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CarFront isAuthenticated={isAuthenticated} logoutAuth={logoutAuth} loginAuth={loginAuth} />} />
        <Route path="/tour" element={<Tour/>} />
        <Route path="/city" element={<City/>} />
      </Routes>
    </div>
  );
}

export default App;
