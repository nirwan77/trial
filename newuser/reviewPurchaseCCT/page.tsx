"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { axios } from "@/lib";
import Loading from "@/components/Loading";

function App(): JSX.Element {
  return (
    <div className="flex justify-center flex-col items-center">
      <Loading />
    </div>
  );
}

export default App;
