"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProjectWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isOpen]);

  return (
    <div>
      <div
        className="flex flex-col sm:flex-row gap-4 w-[300px] h-[400px] sm:w-[550px] sm:h-[200px]"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Image
          width={300}
          height={200}
          className="rounded-xl border"
          src={null}
        ></Image>
        <div className="w-[250px] h-[200px] flex flex-col text-gray-400">
          <h2 className="text-white">Project Name</h2>
          <p className="flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>Type</p>
          <p>Date</p>
        </div>
      </div>
      <div
        className={
          "fixed flex justify-center items-center top-0 left-0 h-screen w-screen " +
          (!isOpen && "hidden")
        }
      >
        <div className="bg-black border-white border rounded-xl w-[900px] h-[600px]">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-4xl p-4"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
