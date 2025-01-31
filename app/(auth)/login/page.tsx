"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader } from "lucide-react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Simulando un login con retraso
    setTimeout(() => {
      setLoading(false);
      toast.success("Successfully Logged In");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <ToastContainer
        theme="dark"
        toastClassName="bg-black text-white shadow-lg rounded-lg"
        bodyClassName="font-sans text-sm"
        position="bottom-right"
        closeButton={false}
        pauseOnHover={false}
        autoClose={1000}
      />

      <div className="w-full max-w-md p-10 border border-muted rounded-lg shadow-lg bg-card">
        <div className="bg-card rounded-lg p-8">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              {loading ? (
                <Loader size={48} className="animate-spin" />
              ) : (
                <Lock size={48} />
              )}
            </div>
          </div>

          <h1 className="text-2xl font-semibold text-center text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Don't have an account yet?{" "}
            <Link
              href="/signup"
              className="text-primary font-bold hover:underline hover:text-primary-hover"
            >
              Sign up
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black border border-muted text-muted-foreground px-4 py-3 w-full rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-black border border-muted text-muted-foreground px-4 py-3 w-full rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-hover transition-all pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white rounded-lg py-3 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <button className="w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-3 text-sm font-semibold flex items-center justify-center gap-2 mt-2 transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-100 hover:border-gray-400">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Login with Google
          </button>

          <p className="text-center text-muted-foreground text-sm mt-6">
            Forgot Your Password?{" "}
            <Link
              href="/forgot-password"
              className="text-primary font-bold hover:underline hover:text-primary-hover"
            >
              Reset Your Password
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
