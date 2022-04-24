import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

interface TheDotsProps {
  readonly condition: boolean;
  readonly path: string;
}

export const PaginationDots = ({ condition, path }: TheDotsProps) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleInputChange = (value: string) => {
    if (Number.isNaN(+value)) return;
    setInputValue(value);
  };

  const handleEnterKey = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue && e.key === "Enter") {
      await router.push(`/${path}/${inputValue}`);
      setInputValue("");
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  if (showInput) {
    return (
      <input
        ref={inputRef}
        onMouseOut={() => setShowInput(false)}
        onKeyUp={(e) => handleEnterKey(e)}
        placeholder="nr"
        type="text"
        value={inputValue}
        onChange={({ target }) => handleInputChange(target.value)}
      />
    );
  }
  return condition ? (
    <div onMouseEnter={() => setShowInput(true)}>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  ) : null;
};
