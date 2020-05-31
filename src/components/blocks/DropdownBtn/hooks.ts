import React, { useEffect, RefObject, SyntheticEvent, MouseEvent } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement | HTMLButtonElement>,
  callback: () => void
) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
