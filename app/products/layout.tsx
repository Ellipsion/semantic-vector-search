import HomepageBg from "@/components/custom/homepage-svg";
import SearchBar from "@/components/custom/searchbar";
import { FC, ReactNode, Suspense } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white">
      <HomepageBg />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex gap-16 lg:px-8 lg:py-16">
        <div className="h-full w-full flex flex-col items-center gap-4">
          <div className="mx-auto mt-16 w-full max-w-2xl flex flex-col gap-y-10">
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
