import React from "react";
import { Link } from "react-router-dom";

export default function JoinCommunity() {
  return (
    <div className="fixed bottom-6 right-6 flex justify-center items-center">
      <Link
        to="https://docs.google.com/forms/d/e/1FAIpQLSe_fz3kiciHuMxocAwUKnXD5B7txcjcN1bP9sMzHNGH5ruTDg/viewform"
        target="_blank"
        className="font-medium text-white h-12 w-[170px] bg-red-600 rounded-full flex justify-center items-center animation-pulse"
      >
        Join DICE
      </Link>
    </div>
  );
}
