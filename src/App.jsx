import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layouts/mainLayout";
import Home from "./Pages/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HotelListings from "./Pages/HotelListings";
import Booking from "./components/Booking";
import HotelDetailsPage from "./Pages/HotelDetailsPage";
import User from "./components/User";
import PaymentConfirmation from "./components/PaymentConfirmation";
import BookingSuccesful from "./components/BookingSuccesful";
import BookingLayout from "./Layouts/BookingLayout"; 
import { SearchProvider } from "./Context/SearchContext";
import { UserProvider } from "./Context/UserContext";
;

const App = () => {
  return (
    <SearchProvider>
      <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/stays" element={<HotelListings />} />
          <Route path="/hotel-details" element={<HotelDetailsPage />} />
          <Route path="/user" element={<User />} />
        </Route>

        <Route index element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/booking" element={<Booking />} />

        <Route element={<BookingLayout />}>
          <Route path="/confirmingPayment" element={<PaymentConfirmation />} />
          <Route path="/bookingSuccesful" element={<BookingSuccesful />} />
        </Route>
      </Routes>
      </UserProvider>
    </SearchProvider>
  );
};

export default App;
