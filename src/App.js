import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";

import { BookingLayout } from "./components/booking/BookingLayout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/booking-page/">
            <Route index element={<BookingLayout />} />
            <Route exact path=":location" element={<BookingLayout />} />
            <Route path="*" element={<BookingLayout />} />
          </Route>
          <Route path="/home" element={<Layout />}></Route>
          <Route path="/" element={<Layout />}></Route>
          <Route path="*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
