import { FC, ReactNode } from "react";
import HomepageBg from "@/components/custom/homepage-svg";
import { Icons } from "@/components/custom/icons";
import SearchBar from "@/components/custom/searchbar";
import { Suspense } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full w-full flex flex-col items-center gap-4">
      <Icons.Sparkles className="w-16 h-16" />
      <Link href={"/"}>
        <h1 className="text-4xl tracking-tight sm:text-6xl font-bold">
          Magic Search
        </h1>
      </Link>
      <p className="max-w-xl text-center text-lg text-accent-foreground/80">
        A beautifully designed, hybrid search engine that uses{" "}
        <code>semantic vector search</code> with{" "}
        <code>Postgres&apos; full-text</code> search.
      </p>

      <div className="mx-auto mt-16 w-full max-w-2xl flex flex-col">
        <Suspense>
          <SearchBar />
        </Suspense>
        {children}
      </div>
    </div>
  );
};

export default Layout;
