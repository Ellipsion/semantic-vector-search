"use client";

import {
  FC,
  KeyboardEventHandler,
  useRef,
  useState,
  useTransition,
} from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchBarProps {}

// intuitive and functional

const SearchBar: FC<SearchBarProps> = ({}) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const [query, setQuery] = useState<string>("");

  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  const keyDownHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Escape") {
      inputRef?.current?.blur();
    }

    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md shadow">
        <Input
          disabled={isSearching}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={keyDownHandler}
          ref={inputRef}
          className="absolute inset-0 h-full px-5"
          placeholder="Enter search query..."
        />
        <Button
          className="absolute right-0 h-full rounded-s-none"
          size={"sm"}
          disabled={isSearching}
        >
          {isSearching ? <Loader2 className="animate-spin" /> : <Search />}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
