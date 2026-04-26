"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      
      {/* Big 404 */}
      <h1 className="text-7xl font-extrabold text-red-600">404</h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-3 max-w-md">
        Sorry, the page you are looking for might have been removed,
        had its name changed, or is temporarily unavailable.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Go Home
        </Link>
      </div>

      {/* Optional: News theme footer */}
      <p className="mt-10 text-sm text-gray-400">
        📰 Stay updated with the latest news
      </p>
    </div>
  );
}