import React, { useState } from 'react';
import bg from '../public/b.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

const SignIn = () => {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in user:', userCredential.user);

      // Redirect to hotels page or dashboard
      navigate('/Home');
    } catch (error) {
      console.error('Login error:', error.message);
      alert(error.message); // or show a nice UI error
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error("Error sending reset email:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="bg-gray-500 h-screen w-full flex items-center justify-center font-itim">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden w-11/12 max-w-4xl">
        {/* Left Side - Form */}
        <div className="p-8 flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign in to your account</h2>
          <form onSubmit={handleSignIn} className="space-y-4 items-center justify-around text-center">
            <div>
              <label className="block text-sm font-medium text-start mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border text-start hover:shadow-xs transition hover:shadow-indigo-600 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-start font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md hover:shadow-xs transition hover:shadow-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-blue-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="bg-blue-800 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don’t have an account?{" "}
            <Link to="/signUp" className="text-blue-500 hover:underline">Sign Up</Link>
          </p>
        </div>

        {/* Right Side , Image */}
        <div className="hidden md:block flex-1 bg-[#531717]">
          <img src={bg} alt="Sign in" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
