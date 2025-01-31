"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md p-10 border border-muted/80 rounded-lg shadow-lg bg-card">
        <div className="bg-card rounded-lg p-8">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock size={48} />
            </div>
          </div>

          <h1 className="text-2xl font-semibold text-center text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Don't have an account yet?{" "}
            <Link
              href="/signup"
              className="text-primary font-bold hover:underline hover:text-lime-500"
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
                className="bg-black border border-muted/80 text-muted-foreground px-4 py-3 w-full rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-black border border-muted/80 text-muted-foreground px-4 py-3 w-full rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-600 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-lime-600 hover:bg-lime-700 text-white rounded-lg py-3 text-sm font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline"
            >
              Login
            </button>
          </form>

          <button className="w-full bg-black border border-gray-200 hover:underline text-white rounded-lg py-3 text-sm font-semibold flex items-center justify-center gap-2 mt-2 transition-all duration-200 ease-in-out transform hover:scale-105">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
