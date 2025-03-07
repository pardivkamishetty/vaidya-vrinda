/*import Image from "next/image";
import Link from "next/link";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/login"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" 
          >
            LOGIN
            <AiOutlineUser size={30} color="red"/>
          </Link>
          <Link
            href="/signup"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            
          >
            Sign-Up
            <AiOutlineUserAdd size={30} color="red" />
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <Link
        href="/signup"
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        <span>Go to login page →</span>
      </Link>
      </footer>
    </div>
  );
}
*/

/*

"use client";

import Image from "next/image";
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import SignUp from "./signup/page";
import Login from "./login/page";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const openSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  const isModalOpen = showLogin || showSignUp;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10"></div>
      )}

      <main
        className={`flex flex-col gap-8 row-start-2 items-center sm:items-start ${
          isModalOpen ? "relative z-0" : ""
        }`}
      >
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            onClick={openLogin}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            LOGIN
            <AiOutlineUser size={30} color="red" />
          </button>

          <button
            onClick={openSignUp}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            Sign-Up
            <AiOutlineUserAdd size={30} color="red" />
          </button>
        </div>
      </main>

      

      
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <Login />
          </div>
        </div>
      )}

      {showSignUp && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <SignUp />
          </div>
        </div>
      )}
    </div>
  );
}

*/

/*"use client";

import Image from "next/image";
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import SignUp from "./signup/page";
import Login from "./login/page";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const openSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  const isModalOpen = showLogin || showSignUp;

  return (
    <div className="relative font-[family-name:var(--font-geist-sans)] bg-black">
      {/* Background Blur Layer }
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10"></div>
      )}

      {/* Content }
      <div className="relative z-0 min-h-screen overflow-y-auto">
        {/* HERO SECTION }
        <section className="min-h-screen flex flex-col items-center justify-center p-8 pb-20 sm:p-20 gap-8 text-center sm:text-left">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <button
              onClick={openLogin}
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              LOGIN
              <AiOutlineUser size={30} color="red" />
            </button>

            <button
              onClick={openSignUp}
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            >
              Sign-Up
              <AiOutlineUserAdd size={30} color="red" />
            </button>
          </div>
        </section>

        {/* ABOUT ME SECTION }
        <section className="bg-black dark:bg-gray-900 py-16 px-8 sm:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
            About Me
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Who am I?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A passionate developer exploring Next.js and frontend design.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Skills
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                React, Next.js, Tailwind CSS, Frontend Development.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Projects
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Built responsive UIs, and created engaging user experiences.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* MODAL WINDOWS }
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <Login />
          </div>
        </div>
      )}

      {showSignUp && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <SignUp />
          </div>
        </div>
      )}
    </div>
  );
}
*/
"use client";

import Image from "next/image";
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignUp from "./signup/page";
import Login from "./login/page";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const openSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  const isModalOpen = showLogin || showSignUp;

  return (
    <div className="relative font-[family-name:var(--font-geist-sans)] bg-black">
      {/* Background Blur Layer */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10"></div>
      )}

      {/* Content */}
      <div className="relative z-0 min-h-screen overflow-y-auto">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center p-8 pb-20 sm:p-20 gap-8 text-center sm:text-left">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm font-[family-name:var(--font-geist-mono)] text-white">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <button
              onClick={openLogin}
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >
              LOGIN
              <AiOutlineUser size={30} color="red" />
            </button>

            <button
              onClick={openSignUp}
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            >
              Sign-Up
              <AiOutlineUserAdd size={30} color="red" />
            </button>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section className="bg-black dark:bg-gray-900 py-16 px-8 sm:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
            About Me
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Who am I?
              </h3>
              <p className="text-gray-300">
                A passionate developer exploring Next.js and frontend design.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Skills
              </h3>
              <p className="text-gray-300">
                React, Next.js, Tailwind CSS, Frontend Development.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Projects
              </h3>
              <p className="text-gray-300">
                Built responsive UIs, and created engaging user experiences.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* MODAL WINDOWS WITH ANIMATION */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <Login />
            </motion.div>
          </motion.div>
        )}

        {showSignUp && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <SignUp />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}