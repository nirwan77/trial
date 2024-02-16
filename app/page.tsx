"use client";

import { useLogin, usePrivy } from "@privy-io/react-auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { login, ready, authenticated } = usePrivy();

  useEffect(() => {
    if (ready && authenticated) {
      redirect("/home");
    }
  }, [authenticated, ready]);

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <button
        className="bg-orange-500 hover:bg-orange-600 py-3 px-6 text-white rounded-lg"
        onClick={login}
      >
        login
      </button>
    </main>
  );
}
