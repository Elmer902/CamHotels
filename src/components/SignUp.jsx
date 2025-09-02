import React, { useState } from 'react'
import bg from '../public/b.png';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // your firebase.js file
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [phone, setPhone] = useState('');
      const navigate = useNavigate();

        const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
        }

        try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userCredential.user);

        // You could also store phone number in Firebase Firestore later

        // Redirect to sign-in page or dashboard
        navigate('/Home');
        } catch (error) {
        console.error("Signup error:", error.message);
        alert(error.message);
        }
        };

  return (
        <div className="bg-gray-500 h-screen w-full flex items-center justify-center font-itim">
          <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden w-11/12 max-w-4xl">
            {/* Left Side - Form */}
            <div className="p-8 flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-6 text-center">Sign Up </h2>
              <form onSubmit={handleSignUp}  className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border hover:shadow-xs transition hover:shadow-indigo-600  border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">New Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border hover:shadow-xs transition hover:shadow-indigo-600  border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium mb-1">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}

                    className="w-full border hover:shadow-xs transition hover:shadow-indigo-600  border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="eg +237 .... .... ...."
                    className="w-full border hover:shadow-xs transition hover:shadow-indigo-600  border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                
          
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Already have an account? <Link to="/" className="text-blue-500 hover:underline">Sign In</Link>
              </p>
            </div>
    
            {/* Right Side , Image */}
            <div className="hidden md:block flex-1 bg-[#531717]">
              <img src={bg} alt="Sign in" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
  )
}

export default SignUp