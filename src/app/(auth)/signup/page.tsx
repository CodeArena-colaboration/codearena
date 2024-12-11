"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
// import { createClient } from "../../../../utils/supabase/server"; // Adjust based on your file structure
import { supabase } from "@/utils";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle OAuth requests
  const handleOAuthRequest = async (provider: "google" | "github" | "linkedin") => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) throw error;
      router.push("/signup/selectprofile"); // Redirect after successful OAuth
    } catch (error) {
      console.error("OAuth error:", error);
      alert(`An error occurred: ${(error as Error).message}`);
    }
  };

  // Function to handle click event for each button
  const handleClick = (provider: "google" | "github" | "linkedin") => () => handleOAuthRequest(provider);

  // Handle form submission for email signup
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { username: formData.name }, // Add custom data
        },
      });

      if (error) throw error;

      alert("Signup successful! Check your email to confirm your account.");
      router.push("/signup/selectprofile"); // Redirect to the profile selection page
    } catch (error) {
      console.error("Signup error:", error);
      alert(`An error occurred: ${(error as Error).message}`);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Signup Form Header */}
      <div className="py-6">
        <h2 className="text-4xl py-2 font-bold text-center text-slate-200">
          Create Your Account
        </h2>
        <p className="text-sm font-light text-slate-200 text-center">
          Welcome! Please fill in the details to get started.
        </p>
      </div>

      {/* Signup Form */}
      <form
        onSubmit={handleSubmit}
        className="w-[40%] rounded-lg text-sm [&>*]:py-3"
      >
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block mb-1 text-slate-200">
            Enter your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md bg-slate-50"
            placeholder="Eg: John Doe"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block mb-1 text-slate-200">
            Enter your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md bg-slate-50"
            placeholder="Eg: johndoe@example.com"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block mb-1 text-slate-200">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md bg-slate-50"
            required
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-1 text-slate-200"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md bg-slate-50"
            required
          />
        </div>

        {/* Divider */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t-2 border-gray-50"></div>
          <span className="flex-shrink mx-4 text-gray-300">or</span>
          <div className="flex-grow border-t-2 border-gray-50"></div>
        </div>

        {/* Social Authentication Buttons */}
        <div className="flex justify-between space-x-4">
          {/* Google OAuth button */}
          <button
            onClick={handleClick("google")}
            type="button"
            className="flex items-center justify-center w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md"
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
          </button>

          {/* GitHub OAuth button */}
          <button
            onClick={handleClick("github")}
            type="button"
            className="flex items-center justify-center w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md"
          >
            <FaGithub className="text-black text-xl" />
          </button>

          {/* LinkedIn OAuth button */}
          <button
            onClick={handleClick("linkedin")}
            type="button"
            className="flex items-center justify-center w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md"
          >
            <FaLinkedin className="text-blue-600 text-xl" />
          </button>
        </div>

        {/* Submit Button */}
        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-3xl text-white text-base bg-gradient-to-r from-[#09A7B1]  to-[#003337] hover:bg-[#09A7B1]"
          >
            Continue {">"}
          </button>
        </div>
      </form>
    </div>
  );
}                                            
