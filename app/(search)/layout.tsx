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
    <div className="relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white">
      <HomepageBg />
      <div className="mx-auto max-w-7xl px-3 md:px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:pt-24 lg:pb-16">
        <div className="h-full w-full flex flex-col items-center gap-4">
          <Icons.Sparkles className="w-16 h-16" />
          <Link href={"/"}>
            <h1 className="text-4xl tracking-tight sm:text-6xl font-bold">
              Magic Search
            </h1>
          </Link>
          <p className="max-w-xl text-center text-lg text-slate-700">
            A beautifully designed, hybrid search engine that uses{" "}
            <code>semantic vector search</code> with{" "}
            <code>Postgres' full-text</code> search.
          </p>

          <div className="mx-auto mt-16 w-full max-w-2xl flex flex-col">
            <Suspense>
              <SearchBar />
            </Suspense>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
