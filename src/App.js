import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";

import { BookingLayout } from "./components/booking/BookingLayout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/booking-page" element={<BookingLayout />}></Route>
          <Route path="/home" element={<Layout />}></Route>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
