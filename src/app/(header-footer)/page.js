"use client";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const route = useRouter();
  useEffect(() => {
    redirect("/home");
  }, [route]);
  return (
    <div>
      {/* <h1>Card Doctor</h1>
      <button className="btn btn-primary">Check</button> */}
    </div>
  );
}
