import React from "react";
import { Library } from 'lucide-react';

const MobileMenuBtn = () => {
  return (
    <div className="ham">
      <button aria-label="Open menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-library-icon lucide-library"
        >
          <path d="m16 6 4 14" />
          <path d="M12 6v14" />
          <path d="M8 8v12" />
          <path d="M4 4v16" />
        </svg>
      </button>
    </div>
  );
};

export default MobileMenuBtn;
