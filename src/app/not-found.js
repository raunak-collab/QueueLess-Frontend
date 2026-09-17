'use client'
import Link from "next/link";
import { ArrowLeft, Home, Stethoscope } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="w-full max-w-2xl text-center">

        {/* Logo / Icon */}
        <div className="flex justify-center mb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
            <Stethoscope
              size={30}
              className="text-primary"
            />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl sm:text-9xl font-bold tracking-tight text-primary">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-2xl sm:text-3xl font-bold">
          Oops! This page got lost in the queue.
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-lg mx-auto text-foreground/60 text-sm sm:text-base leading-7">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved to another place.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

          {/* Home */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            <Home size={17} />
            Back to Home
          </Link>

          {/* Back */}
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-foreground/10 bg-card px-6 py-3 text-sm font-medium transition hover:bg-foreground/5"
          >
            <ArrowLeft size={17} />
            Go Back
          </button>

        </div>

        {/* Brand */}
        <div className="mt-12">
          <p className="font-semibold text-lg">
            QueueLess
          </p>

          <p className="mt-1 text-xs foreground/50">
            Smarter Queues. Happier Patients.
          </p>
        </div>

      </div>
    </main>
  );
}