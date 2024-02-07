"use client";

import { usePrivy } from "@privy-io/react-auth";
import { redirect } from "next/navigation";
import React, { useState, ChangeEvent, useEffect } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";

function App(): JSX.Element {
  const { logout, ready, authenticated } = usePrivy();

  const [file, setFile] = useState<string | undefined>();
  const [username, setUsername] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(URL.createObjectURL(selectedFile));
    }
  }

  useEffect(() => {
    if (ready && !authenticated) {
      redirect("/");
    }
  }, [authenticated, ready]);

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <div className="mb-10 mt-4 font-[425]">
          <button className="absolute left-4">
            <MdOutlineChevronLeft size={24} />
          </button>
          <h2 className="font">Publish a post</h2>
        </div>
      </div>
      <div>
        <input
          className="border-SoSHColorDisabled border"
          type="text"
          name=""
          id=""
        />
      </div>
      <div>
        <button
          className="bg-orange-500 hover:bg-orange-600 py-3 px-6 text-white rounded-lg"
          onClick={logout}
        >
          logout
        </button>
      </div>
    </div>
  );
}

export default App;
