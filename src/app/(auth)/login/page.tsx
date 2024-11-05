"use client";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import { supabase } from "@/utils"; // Import your Supabase client

// Define the form data type
interface FormData {
  email: string;
  password: string;
  phone: string;
}

const LogIn = () => {
  const router = useRouter();
  const [isPhoneSignIn, setIsPhoneSignIn] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    phone: "",
  });

  const toggleSignInMethod = () => {
    setIsPhoneSignIn(!isPhoneSignIn);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSignIn = async () => {
    try {
      // Try signing in with email and password
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        // If password is incorrect or email doesn't exist, show an alert
        if (error.message === "Invalid login credentials") {
          alert("Email or password is incorrect");
        } else {
          alert("An error occurred during login");
          console.error("Login error:", error);
        }
        return;
      }

      // Redirect to profile page if login is successful
      router.push("/my_profile");
    } catch (error) {
      console.error("Error during email login:", error);
      alert("Error during login");
    }
  };

  const handlePhoneSignIn = async () => {
    router.push("/verifyotp"); // Redirect to OTP verification page for phone sign-in
  };

  const handleOAuthSignIn = async (provider: "google" | "github" | "linkedin") => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({ provider });

      if (error) {
        alert(`An error occurred during ${provider} login`);
        console.error(`${provider} login error:`, error);
        return;
      }

      // Supabase will handle the redirect after OAuth sign-in. Ensure redirect path in Supabase settings.
    } catch (error) {
      console.error(`Error during ${provider} OAuth login:`, error);
      alert(`Error during ${provider} login`);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isPhoneSignIn) {
      if (!formData.phone) {
        alert("Please enter a phone number");
        return;
      }
      handlePhoneSignIn();
    } else {
      if (!formData.email || !formData.password) {
        alert("Please fill in both email and password");
        return;
      }
      handleEmailSignIn();
    }
  };

  const handleSignUpRedirect = () => {
    router.push("/signup");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="py-6">
        <h2 className="text-4xl py-2 font-bold text-center text-slate-200">
          Sign in to CodeArena
        </h2>
        <p className="text-sm font-light text-slate-200 text-center">
          Welcome back! Please Sign in to continue
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-[40%] rounded-lg text-sm [&>*]:py-3">
        <div className="flex justify-between space-x-4">
          <button
            type="button"
            onClick={() => handleOAuthSignIn("google")}
            className="flex items-center justify-center h-12 w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md"
          >
            <FaGoogle className="text-red-500 text-lg" />
          </button>
          <button
            type="button"
            onClick={() => handleOAuthSignIn("github")}
            className="flex items-center justify-center h-12 w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md"
          >
            <FaGithub className="text-black text-lg" />
          </button>
          <button
            type="button"
            onClick={() => handleOAuthSignIn("linkedin")}
            className="flex items-center justify-center w-full h-12 p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md"
          >
            <FaLinkedin className="text-blue-600 text-lg" />
          </button>
        </div>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t-2 border-gray-50"></div>
          <span className="flex-shrink mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t-2 border-gray-50"></div>
        </div>

        {!isPhoneSignIn ? (
          <>
            <div>
              <label htmlFor="email" className="block mb-1 text-slate-200">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-black h-12 w-full px-4 py-2 border rounded-md bg-slate-50"
                placeholder="Eg: johndoe@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-slate-200">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="text-black h-12 w-full px-4 py-2 border rounded-md bg-slate-50"
                required
              />
            </div>
          </>
        ) : (
          <div>
            <label htmlFor="phone" className="block mb-1 text-slate-200">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="text-black h-12 w-full px-4 py-2 border rounded-md bg-slate-50"
              placeholder="Eg: +1234567890"
              required
            />
          </div>
        )}

        <div className="w-full flex items-center justify-center">
          <button type="submit" className="w-full px-4 py-2 rounded-3xl text-white text-base bg-gradient-to-r from-[#09A7B1] to-[#003337] hover:bg-[#09A7B1]">
            Continue {">"}
          </button>
        </div>

        <div className="flex justify-center items-center hover:cursor-pointer" onClick={toggleSignInMethod}>
          <a className="text-blue-600 text-base">
            {isPhoneSignIn ? "Use Email Instead" : "Use Phone Number Instead"}
          </a>
        </div>
      </form>

      <div className="mt-4 flex justify-center items-center">
        <p className="text-white text-base">
          Don’t have an account?{" "}
          <a className="text-blue-600 text-base hover:cursor-pointer" onClick={handleSignUpRedirect}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;

