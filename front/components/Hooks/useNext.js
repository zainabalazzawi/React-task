import React, { useState } from "react";

const useNext = () => {
  const [next, setNext] = useState;
  return {
    next,
    setNext,
  };
};

export default useNext;
