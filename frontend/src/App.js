import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Payment from './components/Payment';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
