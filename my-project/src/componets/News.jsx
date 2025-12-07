import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState({ type: "", message: "" });

  // ---------- SHOW TOAST ----------
  const showToast = (type, message) => {
    setToast({ type, message });

    setTimeout(() => {
      setToast({ type: "", message: "" });
    }, 2500);
  };

  // ---------- SUBMIT HANDLER ----------
  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty check
    if (!email.trim()) {
      showToast("error", "Please enter your email address.");
      return;
    }

    // Format check
    if (!emailRegex.test(email)) {
      showToast("error", "Please enter a valid email address.");
      return;
    }

    // Success
    showToast("success", "You’ve signed up successfully!");
    setEmail(""); // clear input
  };

  return (
    <div className="w-full bg-white min-h-[500px] flex flex-col items-center px-4 py-12 mt-16">
      {/* TOAST */}
      {toast.message && (
        <div
          className={`
            fixed top-6 right-6 
            px-5 py-3 rounded-xl shadow-lg 
            text-sm font-medium transition-all duration-300 z-[999]
            ${
              toast.type === "success"
                ? "bg-sky-100 text-sky-700 border border-sky-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }
          `}
        >
          {toast.message}
        </div>
      )}

      <div
        className="
          w-full max-w-6xl 
          min-h-[500px]
          bg-[#f4f7ff] 
          rounded-[40px]
          p-8 md:p-12 
          flex flex-col md:flex-row 
          md:justify-between 
          items-start md:items-center 
          gap-10
          bg-[url('/news.jpg')] bg-no-repeat bg-center
          bg-[length:1400px] md:bg-[length:full]
        "
      >
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#1d3ba8] mb-4">
            Stay up to date
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Get updates on all of our events and be the first to get notified
            when tickets go on sale.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full max-w-md">
          <p className="text-lg font-medium text-[#1d3ba8] mb-3">
            Sign up to our newsletter ↓
          </p>

          {/* INPUT + BUTTON */}
          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden p-2">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 outline-none text-gray-700 text-base"
            />

            {/* DESKTOP BUTTON */}
            <button
              onClick={handleSubmit}
              className="
                hidden sm:block 
                bg-blue-600 text-white 
                px-5 py-3 
                rounded-[20px] 
                hover:bg-blue-700 
                transition text-lg
              "
            >
              Sign up today
            </button>

            {/* MOBILE BUTTON */}
            <button
              onClick={handleSubmit}
              className="
                sm:hidden bg-blue-600 text-white 
                p-3 rounded-full hover:bg-blue-700 
                transition flex items-center justify-center
              "
            >
              ➜
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
          w-full max-w-6xl 
          flex flex-col md:flex-row 
          justify-between items-center 
          mt-12 text-gray-600 gap-4 md:gap-0
        "
      >
        <div className="flex items-center gap-2">
          <svg
            className="h-12 w-auto text-slate-900"
            viewBox="0 0 48 48"
            fill="currentColor"
          >
            <path
              fill="#3b82F6"
              d="M1.172 21.172a4 4 0 000 5.656l20 20a4 4 0 105.656-5.656l-20-20a4 4 0 00-5.656 0z"
            />
            <path
              fill="#93C5FD"
              d="M26.828 6.828a4 4 0 10-5.656-5.656l-19 19A3.987 3.987 0 015 19a3.98 3.98 0 012.827 1.172L10.657 23 26.828 6.828z"
            />
          </svg>

          <span className="text-xl font-semibold text-black">DeceptiConf</span>
        </div>

        <p className="text-sm md:text-base text-center md:text-left">
          Copyright © 2025 DeceptiConf, LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
}
