"use client"; 

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Something Went Wrong!
        </h1>
        <p className="text-lg text-text-secondary mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={
           
            () => reset()
          }
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-colors"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}