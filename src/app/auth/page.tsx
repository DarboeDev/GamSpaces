"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Dialog } from "@headlessui/react";

const AuthPage = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") as "login" | "signup" | null;
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (mode === "signup" || mode === "login") {
      setAuthMode(mode);
    }
  }, [mode]);

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === "signup") {
      setRoleModalOpen(true);
    }
  };

  const handleRoleConfirm = () => {
    console.log("Selected Role:", selectedRole);
    // Handle actual signup logic here
    setRoleModalOpen(false);
    router.push("/dashboard"); // or wherever
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white">
          <div className="w-full max-w-md">
            <h1
              onClick={() => router.push("/")}
              className="sniglet-extrabold cursor-pointer pb-8 text-center text-5xl drop-shadow-lg text-black"
            >
              Gam<span className="text-blue-500">Spaces</span>
            </h1>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              {authMode === "login" ? "Welcome Back" : "Create an Account"}
            </h1>
            <p className="text-gray-500 mb-8">
              {authMode === "login"
                ? "Please enter your credentials to login"
                : "Fill in the information to create a new account"}
            </p>

            <form onSubmit={handleSignupSubmit} className="space-y-6">
              {authMode === "signup" && (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>

              {authMode === "signup" && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="••••••••"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                {authMode === "login" ? "Login" : "Sign Up"}
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-600">
              {authMode === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => router.push("/auth?mode=signup")}
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => router.push("/auth?mode=login")}
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/login.jpg"
            alt="Auth Image"
            layout="fill"
            objectFit="cover"
            className="rounded-l-xl"
          />
        </div>
      </div>

      {/* Modal for Role Selection */}
      <Dialog
        open={roleModalOpen}
        onClose={() => setRoleModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl space-y-4">
            <Dialog.Title className="text-xl font-bold text-gray-800 text-center">
              Choose Your Role
            </Dialog.Title>
            <div className="grid grid-cols-2 gap-4">
              {["Buyer", "Seller"].map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`border-2 p-4 rounded-lg font-semibold transition ${
                    selectedRole === role
                      ? "border-blue-600 bg-blue-100 text-blue-700"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
            <button
              onClick={handleRoleConfirm}
              disabled={!selectedRole}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-700 transition disabled:opacity-50"
            >
              Continue
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default AuthPage;
