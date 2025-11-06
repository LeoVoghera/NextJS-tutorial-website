"use client";
import Image from "next/image";

const ExploreBTN = () => {
  return (
    <button type="button" id="explore-btn" onClick={() => alert("Explore button clicked")} className="mt-7  mx-auto">
        <a href="#events">Explore Events </a>
        <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
    </button>
  )
}

export default ExploreBTN