// src/pages/Login.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useToast } from "../hooks/use-toast";
import { supabase } from "../../supabaseClient";

type LoginForm = {
  email: string;
  password: string;
  rememberMe: boolean;
};
type SignupForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
};

export default function Login(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [signupForm, setSignupForm] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginForm.email,
        password: loginForm.password,
      });

      if (error) throw error;

      toast({
        title: "Welcome back!",
        description: "You have successfully logged into Monastery360.",
      });

      // redirect or reload as needed
      window.location.reload();
    } catch (err: any) {
      toast({
        title: "Login Failed",
        description: err?.message ?? "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (signupForm.password !== signupForm.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!signupForm.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the Terms of Service to continue.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email: signupForm.email,
        password: signupForm.password,
        options: {
          data: {
            full_name: signupForm.name,
          },
        },
      });

      if (error) throw error;

      toast({
        title: "Account Created!",
        description: "Welcome to Monastery360. Please check your email to confirm your account.",
      });

      setIsLogin(true);
    } catch (err: any) {
      toast({
        title: "Signup Failed",
        description: err?.message ?? "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          // Supabase default callback path is /auth/v1/callback; ensure this URI is added in Google Console
          redirectTo: `${window.location.origin}/auth/v1/callback`,
        },
      });

      if (error) throw error;
      // On success Supabase will redirect the browser — no extra handling needed here
    } catch (err: any) {
      toast({
        title: "Google Login Failed",
        description: err?.message ?? "An unexpected error occurred.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="monastery-card p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold monastery-text-primary">
                {isLogin ? "Welcome Back" : "Join Monastery360"}
              </h2>
              <p className="monastery-text-secondary mt-2">
                {isLogin
                  ? "Continue your spiritual journey with us"
                  : "Begin your path to mindfulness and wisdom"}
              </p>
            </div>

            <div className="flex bg-straw/20 rounded-xl p-1 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  isLogin
                    ? "bg-japanese-carmine text-white shadow-sm"
                    : "monastery-text-secondary hover:monastery-text-primary"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  !isLogin
                    ? "bg-japanese-carmine text-white shadow-sm"
                    : "monastery-text-secondary hover:monastery-text-primary"
                }`}
              >
                Sign Up
              </button>
            </div>

            {isLogin ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium monastery-text-primary mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-taupe" size={18} />
                    <input
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border monastery-border rounded-xl focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium monastery-text-primary mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-taupe" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="w-full pl-10 pr-12 py-3 border monastery-border rounded-xl focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-taupe hover:monastery-text-primary"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={loginForm.rememberMe}
                      onChange={(e) => setLoginForm({ ...loginForm, rememberMe: e.target.checked })}
                      className="w-4 h-4 text-japanese-carmine border-rose-taupe/30 rounded focus:ring-japanese-carmine"
                    />
                    <span className="ml-2 text-sm monastery-text-secondary">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-japanese-carmine hover:text-sinopia transition-colors">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full monastery-btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <>Sign In <ArrowRight size={18} /></>}
                </button>
              </form>
            ) : (
              <form onSubmit={handleSignup} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium monastery-text-primary mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-taupe" size={18} />
                    <input
                      type="text"
                      required
                      value={signupForm.name}
                      onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border monastery-border rounded-xl focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium monastery-text-primary mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-taupe" size={18} />
                    <input
                      type="email"
                      required
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border monastery-border rounded-xl focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium monastery-text-primary mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-taupe" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                      className="w-full pl-10 pr-12 py-3 border monastery-border rounded-xl focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none"
                      placeholder="Create a password"
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-taupe hover:monastery-text-primary"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium monastery-text-primary mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-taupe" size={18} />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={signupForm.confirmPassword}
                      onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border monastery-border rounded-xl focus:ring-2 focus:ring-japanese-carmine focus:border-transparent outline-none"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={signupForm.agreeToTerms}
                      onChange={(e) => setSignupForm({ ...signupForm, agreeToTerms: e.target.checked })}
                      className="w-4 h-4 text-japanese-carmine border-rose-taupe/30 rounded focus:ring-japanese-carmine mt-0.5"
                    />
                    <span className="text-sm monastery-text-secondary leading-relaxed">
                      I agree to the{" "}
                      <Link to="/terms" className="text-japanese-carmine hover:text-sinopia">Terms of Service</Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-japanese-carmine hover:text-sinopia">Privacy Policy</Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full monastery-btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <>Create Account <ArrowRight size={18} /></>}
                </button>
              </form>
            )}

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t monastery-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background monastery-text-secondary">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full inline-flex justify-center py-2.5 px-4 border monastery-border rounded-xl shadow-sm bg-white text-sm font-medium monastery-text-secondary hover:bg-straw/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="ml-2">Google</span>
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm monastery-text-secondary">
                By signing up, you're joining a community dedicated to mindfulness,
                spiritual growth, and the preservation of monastic wisdom.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
