"use client";

import Link from "next/link";
import { X } from "lucide-react";

export default function SearchFormResetBtn() {
  const resetForm = () => {
    const formEl = document.querySelector(
      "[data-search-form]"
    ) as HTMLFormElement;

    if (formEl) formEl.reset();
  };

  return (
    <button type="reset" onClick={resetForm}>
      <Link href="/" className="search-btn text-white">
        <X className="size-5" />
      </Link>
    </button>
  );
}
