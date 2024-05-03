import { redirect } from "next/navigation";
import { FC } from "react";

interface SearchPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const SearchPage: FC<SearchPageProps> = ({ searchParams }) => {
  const { query } = searchParams;

  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  return <div>{query}</div>;
};

export default SearchPage;
