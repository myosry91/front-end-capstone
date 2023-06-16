import { Route, Routes } from "react-router-dom";
import "./Main.css";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage ";
import { useReducer, useState } from "react";
import { useEffect } from "react";

const reducer = (state, action)=>{
  
}
function Main() {
  const [time, setTime] = useState('')

  const updateTimes = () => {

   };
  const initializeTimes = () => {
    
  }
  useEffect(
    () => {
      fetch("https://example.com/api/data").then((response) =>
        console.log("Success")
      );
    }
  )

  const [state, dispatch] = useReducer(reducer, '');
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage time={time} setTime ={setTime} />} />
      </Routes>
    </main>
  );
}

export default Main;
