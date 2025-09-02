import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../Context/UserContext";
import userimg from '../public/person.png'; // move images to src/assets/
import K_hotel from '../public/k hotel douala.webp'
import { auth } from "../firebase";
import { updateProfile, updateEmail, signOut } from "firebase/auth";
import { getNames } from 'country-list';
import { useNavigate } from "react-router-dom";
import { allHotels } from '../Pages/HotelListings';

const countries = getNames();

const User = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(userimg);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  // Load user info when component mounts or user changes
  useEffect(() => {
    if (user) {
      const [first, last] = (user.name || "").split(" ");
      setFirstName(first || "");
      setLastName(last || "");
      setEmail(user.email || "");
      setCountry(user.country || "");
      setAvatar(user.avatar || userimg);
    }
  }, [user]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

const handleSave = async () => {
  if (!auth.currentUser) {
    alert("No user signed in!");
    return;
  }

  try {
    // Update Firebase profile
    await updateProfile(auth.currentUser, {
      displayName: `${firstName} ${lastName}`,
    });
    
    if (auth.currentUser.email !== email) {
      await updateEmail(auth.currentUser, email); // optional
    }

    setUser({
      ...user,
      name: `${firstName} ${lastName}`,
      email,
      country,
      avatar,
    });

    alert("Profile updated!");
  } catch (error) {
    console.error(error);
    alert("Failed to update profile: " + error.message);
  }
};
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/"); // redirect to sign-in page
    } catch (error) {
      console.error("Logout error:", error.message);
      alert("Failed to logout: " + error.message);
    }
  };

  return (
    <div className="px-6 md:px-16 py-10 space-y-16 font-itim">
      {/* Profile Section */}
      <div className="flex md:flex-row items-center md:items-start justify-center gap-10">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src={avatar || userimg}
            alt="User"
            className="w-32 h-32 bg-black rounded-full object-cover border-4 border-indigo-600"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="mt-2 text-center w-full px-2"
          />
          <button
            onClick={handleSave}
            className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition"
          >
            Edit
          </button>
        </div>

        {/* User Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-8/12">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-2 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-500 transition"
        >
          Logout
        </button>
      </div>

      {/* Favorite Hotels */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Favorite Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allHotels.slice(0, 3).map((hotel, idx) => (
           <div
          key={idx}
         className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
         <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
         <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
         <p className="text-gray-500">{hotel.location}</p>
         </div>
          </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default User;
